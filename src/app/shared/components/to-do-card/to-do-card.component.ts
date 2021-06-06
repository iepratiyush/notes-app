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

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() done: EventEmitter<any> = new EventEmitter();
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

  onDone() {
    this.done.emit();
  }
  
  onDelete() {
    this.delete.emit();
  }

}
