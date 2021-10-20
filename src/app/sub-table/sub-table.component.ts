import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-table',
  templateUrl: 'sub-table.component.html',
  styleUrls: ['sub-table.component.css'],
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
