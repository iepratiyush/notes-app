import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { COLORS } from '../../shared.constants';
import { FormBuilder } from '@angular/forms';
import { ToDoFirebaseService } from '../../services/to-do-firebase.service';
import { map } from 'rxjs/operators';
import { Todo }  from '../../shared.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { NewToDoMobileDialogComponent } from '../new-to-do-mobile-dialog/new-to-do-mobile-dialog.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todos?: Todo[];
  isHandset = false;

  newTodoForm = this.fb.group({
    text: [''],
  });

  constructor(
    breakpointObserver: BreakpointObserver, 
    private fb: FormBuilder, 
    private changeDetection: ChangeDetectorRef,
    private todoFirebaseService: ToDoFirebaseService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
  ) { 
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.isHandset = true;
      } else {
        this.isHandset = false;
      }
    });
  }

  ngOnInit(): void {
    this.todoFirebaseService.getReady().subscribe(value => {
      if (value) {
        this.retrieveTodos();
      }
    })
  }

  retrieveTodos(): void {
    if (this.todoFirebaseService.getAll()) {
      this.todoFirebaseService.getAll().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        this.todos = data;
        console.log(this.todos);
      });
    }
  }

  onCreateDesktop(): void {
    this._create(this.newTodoForm.get('text')?.value);
  }

  _create(text: string): void {
    let todo = new Todo();
    todo.text = text;
    todo.completed = false;
    this.todoFirebaseService.create(todo).then(() => {
      this._snackBar.open('To do created!!', 'Dismiss', {duration: 3000});
    })
  }

  getHexCode(i: number): string {
    let index = i % 5;
    return [...COLORS][index];
  }

  onEdit (key: any, text: any): void {
    console.log(text);
    const dialogRef = this._dialog.open(EditDialogComponent, {
      width: '250px',
      data: text
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result !== text)
      this.todoFirebaseService.update(key, {text: result}).then(() => {
        this._snackBar.open('To do edited!!', 'Dismiss', {duration: 3000});
      });
    });
  }

  onDone (key: any): void {
    this.todoFirebaseService.update(key, {completed: true}).then(() => {
      this._snackBar.open('To do completed!!', 'Dismiss', {duration: 3000});
    });
  }

  onDelete (key: any): void {
    this.todoFirebaseService.delete(key).then(() => {
      this._snackBar.open('To do deleted!!', 'Dismiss', {duration: 3000});
    });
  }

  onCreateMobile(): void {
    const dialogRef = this._dialog.open(NewToDoMobileDialogComponent, {
      width: '250px',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result !== '')
      this._create(result);
    });
  }

}
