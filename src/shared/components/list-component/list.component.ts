import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wkt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  public edit(element: any) {
  }

  public editStatus(element: any) {
  }

  public deleteItem(element: any) {
  }

}

export class PeriodicElement {
  name!: string;
  position!: number;
  weight!: number;
  symbol!: string;
  action!: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: '' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', action: '' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action: '' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', action: '' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', action: '' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', action: '' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', action: '' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', action: '' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', action: '' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', action: '' },
];
