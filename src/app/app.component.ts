import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

export interface tablevalue {
  value: string;
  isvisible?: boolean;
}

export interface user {
  name: tablevalue;
  age: tablevalue;
  edu: tablevalue;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent {
  dataSource;
  displayedColumns = ['name', 'age', 'edu'];

  public currentExpandedRow: any;
  public expandRow: boolean = false;
  isExpansionDetailRow = (_, row: user) => row.hasOwnProperty('detailRow');

  constructor() {
    // this.dataSource = this.userdata;
  }
}

const userdata: user[] = [
  {
    name: { value: 'Rehan' },
    age: { value: '28' },
    edu: { value: 'Maths' },
  },
  {
    name: { value: 'Swami' },
    age: { value: '30' },
    edu: { value: 'Sciencee' },
  },
  {
    name: { value: 'Sunil' },
    age: { value: '26' },
    edu: { value: 'History' },
  },
];
