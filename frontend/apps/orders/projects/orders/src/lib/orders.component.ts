import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  itemName: string;
  position: number;
  itemDescription: string;
  orderDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, itemName: 'mouse', itemDescription: 'mouse', orderDate: '12-10'},
  {position: 2, itemName: 'keyBoard', itemDescription: 'keyBoard', orderDate: '12-10'},
  {position: 3, itemName: 'penDrive', itemDescription: 'penDrive', orderDate: '12-10'},
  {position: 4, itemName: 'Mobile', itemDescription: 'Mobile', orderDate: '12-10'},
  {position: 5, itemName: 'Router', itemDescription: 'Router', orderDate: '12-10'},
  {position: 6, itemName: 'Monitor', itemDescription: 'Monitor', orderDate: '12-10'},
  {position: 7, itemName: 'Charger', itemDescription: 'Charger', orderDate: '12-10'},
  {position: 8, itemName: 'Battery', itemDescription: 'Battery', orderDate: '12-10'},
  {position: 9, itemName: 'Joystick', itemDescription: 'Joystick', orderDate: '12-10'},
  {position: 10, itemName: 'Printer', itemDescription:'Printer', orderDate: '12-10'},
];

@Component({
  selector: 'lib-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {



  displayedColumns: string[] = ['position', 'itemName', 'itemDescription', 'orderDate'];
  dataSource = ELEMENT_DATA;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

constructor() { }

ngOnInit() {
  // this.dataSource.paginator = this.paginator;
}
}
