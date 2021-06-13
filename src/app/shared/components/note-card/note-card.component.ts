import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../shared.interface';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note!: Note;
  @Input() colorHexCode: string = '';

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  isHandset = false;

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
  }

  onEdit() {
    this.edit.emit();
  }
  
  onDelete() {
    this.delete.emit();
  }

}
