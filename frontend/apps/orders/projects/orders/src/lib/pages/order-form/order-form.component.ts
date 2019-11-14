import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../orders.service';
import { OrderModel } from '../../orders-model';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'lib-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  
  submitButton: string = 'Submit';
  formMode: string = 'Add order';
  orderId: string;
  order: OrderModel = {
    itemName : '',
    quantity: '',
    description:'',
    price:'',
    orderDate: new Date
  };
  durationInSeconds = 5;

  constructor(private route: ActivatedRoute,
    private ordersService: OrdersService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.orderId = this.route.snapshot.paramMap.get('id');
      this.submitButton = 'Update'
      this.formMode = 'Edit Device';
    }
  }
  onClickOrderButton(): void {
    if (this.orderId) {
      // Update device service
      this.updateOrder();
    } else {
      // Add device service
      this.addOrder();
    }
  }

  addOrder(): void {
    const payload: OrderModel = this.order;
    this.ordersService.addorder(payload).subscribe(res => {

    }, (err: HttpErrorResponse) => {
      this.openSnackBar(err.message);
    });
  }

  updateOrder(): void {
    const payload: OrderModel = this.order;
    this.ordersService.updateOrder(payload).subscribe(res => {

    }, (err: HttpErrorResponse) => {
      this.openSnackBar(err.message);
    });
  }

  openSnackBar(errorMessage: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: errorMessage
    });
  }

  }


