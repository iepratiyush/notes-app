import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorService } from '../../services/color.service';
import { COLOR_MAP_DARK, COLOR_MAP_LIGHT } from '../../shared.constants';
import { ToDoCard } from '../../shared.interface';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.scss']
})
export class ToDoCardComponent implements OnInit {
  @Input() todoCard!: ToDoCard;
  @Input() isTodo: boolean = true;

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() done: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  colorHexCode = '';

  constructor(colorService: ColorService) { 
    colorService.getProfileObs().subscribe(isDark => {
      this.colorHexCode = isDark ? COLOR_MAP_DARK[this.todoCard.color] : COLOR_MAP_LIGHT[this.todoCard.color];
    })
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
