import { Component, Input, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-sub-table',
  templateUrl: 'sub-table.component.html',
  styleUrls: ['sub-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class SubTableComponent implements OnInit {
  @Input() data: any;
  @Input() columnsToDisplay: Array<any>;
  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];

  constructor() {}

  ngOnInit() {
    console.log('Input data', this.data, this.columnsToDisplay);
  }
}
