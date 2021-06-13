import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo }  from '../../shared.interface';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.scss']
})
export class ToDoCardComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() colorHexCode: string = '';

  @Output() edit: EventEmitter<String> = new EventEmitter();
  @Output() done: EventEmitter<any> = new EventEmitter();
  @Output() undo: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  isHandset = false;
  data = '';
  editMode = false;

  constructor(breakpointObserver: BreakpointObserver) {
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
    if (this.todo && this.todo.text) {
      this.data = this.todo.text
    }
  }

  onEdit() {
    this.editMode = true;
  }

  editCheck() {
    this.edit.emit(this.data);
    this.editMode = false;
  }

  editCancel() {
    this.editMode = false;
  }

  onDone(): void {
    this.done.emit();
  }
  
  onDelete(): void {
    this.delete.emit();
  }

  onUndo(): void {
    this.undo.emit();
  }

}
