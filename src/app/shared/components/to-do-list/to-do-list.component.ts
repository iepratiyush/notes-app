import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { COLOR_MAP_DARK, COLOR_MAP_LIGHT, DONE_CARD, TO_DO_CARD } from '../../shared.constants';
import { ToDoCard } from '../../shared.interface';
import { FormBuilder } from '@angular/forms';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todo: ToDoCard[] = [];
  done: ToDoCard[] = [];
  colorOptionsMap: any;
  colorOptionsKeys: string[] = [];
  isHandset = false;

  newNoteForm = this.fb.group({
    text: [''],
    color: [''],
  });

  constructor(breakpointObserver: BreakpointObserver, private fb: FormBuilder, colorService: ColorService) { 
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.isHandset = true;
      } else {
        this.isHandset = false;
      }
    });

    colorService.getProfileObs().subscribe(isDark => {
      this.colorOptionsMap = isDark ? COLOR_MAP_DARK : COLOR_MAP_LIGHT;
      this.colorOptionsKeys = Object.keys(this.colorOptionsMap);
    })
    
  }

  ngOnInit(): void {
    this.todo = [...TO_DO_CARD];
    this.done = [...DONE_CARD];
  }

  drop(event: CdkDragDrop<ToDoCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log(event);
  }

}
