import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { BoardsService } from '../../services/boards.service';

import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit, AfterViewInit {
  @Input() board!: Board;
  scrollEventAdded = false;

  constructor(private elementRef: ElementRef) {}

  addColumn() {
    this.board.columns?.push(new Column('Teste', []));
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.elementRef.nativeElement
      .querySelector('.board-columns')
      ?.addEventListener('wheel', this.scrollEvent.bind(this));
  }

  scrollEvent(event: WheelEvent) {
    const target = (event.target as HTMLElement).closest('.board-wrapper');
    console.log(target);

    if (event.deltaY > 0) {
      target.scrollBy(250, 0);
    } else {
      target.scrollBy(-250, 0);
    }
  }
}
