import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatTableDataSource,
  MatDialog
} from '@angular/material';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'lib-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

  }

  deleteOrder(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { orderId: 1000 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}

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



