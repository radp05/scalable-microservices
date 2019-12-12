import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatTableDataSource,
  MatDialog
} from '@angular/material';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { OrdersService } from '../../orders.service';
import { SnackbarService } from '../../services/snackbar.service';
import { routerTransition } from '../../components/animation/animation.component';

@Component({
  selector: 'lib-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  animations: [routerTransition()]
})
export class OrderListComponent implements OnInit {

  displayedColumnsKey: string[] = ['position', 'productName', 'productDescription', 'date', 'action'];
  displayCoulmnsLabel: any[] = [
    {
      productName: 'Order Name'
    },
    {
      productDescription: 'Product Description'
    },
    {
      date: 'Order Date'
    }
  ];
  dataSource: MatTableDataSource<DataResponse>;
  beginProcess = false;
  deleteActionIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private ordersService: OrdersService,
    private snackbarService: SnackbarService
  ) {
    this.getData();
  }

  ngOnInit() {

  }

  getData(): void {
    this.dataSource = null;
    this.ordersService.getAllOrders().subscribe(res => {
      console.log('??res', res);
      this.dataSource = res.data;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackbarService.error(err.message);
    });
  }

  deleteOrder(orderId: string, actionIndex: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { orderId: orderId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.spinner();
        this.deleteActionIndex = actionIndex;
        this.ordersService.removeOrder({ _id: result }).subscribe(() => {
          this.getData();
        }, err => {
          this.snackbarService.error(err.message);
        }).add(() => {
          this.spinner();
        });
      }
    });
  }

  spinner(): void {
    this.beginProcess = !this.beginProcess;
  }

}

export interface DataResponse {
  productName: string;
  productDescription: string;
  date: Date;
}
