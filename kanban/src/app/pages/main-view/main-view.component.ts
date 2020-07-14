import { Component, OnInit } from '@angular/core';

import { BoardsService } from '../../services/boards.service';

import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  boards: Board[];
  constructor(private boardsService: BoardsService) {}

  ngOnInit(): void {
    this.getBoards();
  }

  addBoard() {
    this.boards = this.boardsService.add(new Board('teste', []));
  }

  getBoards(): void {
    this.boards = this.boardsService.getBoards();
  }
}
