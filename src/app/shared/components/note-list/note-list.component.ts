import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Note }  from '../../shared.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { NotesFirebaseService } from '../../services/notes-firebase.service';
import { NewNoteMobileDialogComponent } from '../new-note-mobile-dialog/new-note-mobile-dialog.component';
import { COLORS } from '../../shared.constants';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notes?: Note[];
  isHandset = false;

  newNoteForm = this.fb.group({
    title: ['', Validators.compose([Validators.minLength(3), Validators.required])],
    note: ['', Validators.compose([Validators.minLength(3), Validators.required])],
  });

  constructor(
    breakpointObserver: BreakpointObserver, 
    private fb: FormBuilder, 
    private changeDetection: ChangeDetectorRef,
    private noteFirebaseService: NotesFirebaseService,
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
    this.noteFirebaseService.getReady().subscribe(value => {
      if (value) {
        this.retrieveTodos();
      }
    })
  }

  retrieveTodos(): void {
    if (this.noteFirebaseService.getAll()) {
      this.noteFirebaseService.getAll().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        this.notes = data;
      });
    }
  }

  onCreateDesktop(): void {
    this._create(this.newNoteForm.get('title')?.value, this.newNoteForm.get('note')?.value);
  }

  getHexCode(i: number): string {
    let index = i % 5;
    return [...COLORS][index];
  }

  _create(title: string, text: string): void {
    let note = new Note();
    note.title = title;
    note.text = text;
    this.noteFirebaseService.create(note).then(() => {
      this._snackBar.open('Note created!!', 'Dismiss', {duration: 3000});
    })
  }

  onDelete (key: any): void {
    this.noteFirebaseService.delete(key).then(() => {
      this._snackBar.open('Note deleted!!', 'Dismiss', {duration: 3000});
    });
  }

  onCreateMobile(): void {
    const dialogRef = this._dialog.open(NewNoteMobileDialogComponent, {
      width: '250px',
      data: {title: '', text: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result !== '')
      this._create(result.title, result.text);
    });
  }

}
