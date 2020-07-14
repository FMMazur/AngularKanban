import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  boards: Board[] = [
    new Board('Test', [
    new Column(
      'To Do',
      [
        'Add Column',
        'Remove Column',
        'Add Task',
      ]
    ),
    new Column(
      'Done',
      [
        'Create Kanban Project',
      ]
    ),
    ])
  ];
  constructor() {}

  getBoards() {
    return this.boards;
  }

  add(board: Board) {
    this.boards.push(board);
    return this.boards;
  }

  clear() {
    this.boards = [];
    return this.boards;
  }
}
