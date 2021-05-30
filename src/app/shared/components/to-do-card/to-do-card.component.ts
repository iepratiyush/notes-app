import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.scss']
})
export class ToDoCardComponent implements OnInit {
  @Input() text: String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
