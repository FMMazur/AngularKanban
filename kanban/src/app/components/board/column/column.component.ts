import { Component, OnInit, Input } from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Column } from '../../../models/column.model';

@Component({
  selector: 'board-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class BoardColumnComponent implements OnInit {
  @Input() column: Column;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(column: Column) {
    column.tasks.push('teste');
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
