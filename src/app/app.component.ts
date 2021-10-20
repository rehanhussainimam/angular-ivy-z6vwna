import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

export interface tablevalue {
  value: string;
  isvisible?: boolean;
}

export interface user {
  position: number;
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
  explansionDetialRowCollection = new Array<any>();

  constructor() {
    // this.dataSource = this.userdata;
    this.dataSource = new ExampleDataSource();
  }

  public toggleDetailsRow(row: user): void {
    this.expandRow = this.explansionDetialRowCollection.includes(row);
    if (this.expandRow !== true) {
      this.explansionDetialRowCollection.push(row);
    } else {
      // let index = this.explansionDetialRowCollection.findIndex(idRow => idRow.name === row.element.name);
      let test = this.explansionDetialRowCollection[0].name;
      this.explansionDetialRowCollection.forEach((item, index) => {
        if (item.position === row.position)
          this.explansionDetialRowCollection.splice(index, 1);
      });
      // this.explansionDetialRowCollection.splice(0, 1);
    }
  }
}

const userdata: user[] = [
  {
    position: 1,
    name: { value: 'Rehan' },
    age: { value: '28' },
    edu: { value: 'Maths' },
  },
  {
    position: 2,
    name: { value: 'Swami' },
    age: { value: '30' },
    edu: { value: 'Sciencee' },
  },
  {
    position: 3,
    name: { value: 'Sunil' },
    age: { value: '26' },
    edu: { value: 'History' },
  },
];

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    const rows = [];
    userdata.forEach((element) =>
      rows.push(element, { detailRow: true, element })
    );
    return of(rows);
  }

  disconnect() {}
}
