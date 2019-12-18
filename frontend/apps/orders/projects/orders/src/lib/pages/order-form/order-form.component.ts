import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../orders.service';
import { OrderModel } from '../../order-model';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarService } from '../../services/snackbar.service';
import { ipAddressPattern } from '../../regex-pattern';
import { routerTransition } from '../../components/animation/animation.component';

@Component({
  selector: 'lib-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  animations: [routerTransition()]
})
export class OrderFormComponent implements OnInit {

  btnLabel = 'Submit';
  formLabel = 'Add Order';
  orderId: string;
  order: OrderModel = {
    productName: '',
    productDescription: '',
    date: new Date()
  };
  beginProcess = false;
  isViewForm = false;
  ipAddressRegx: RegExp = ipAddressPattern;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.orderId = this.route.snapshot.paramMap.get('id');
      const url = this.router.url;
      if (url.includes('view')) {
        this.isViewForm = true;
        this.formLabel = 'View Order';
      } else {
        this.btnLabel = 'Update';
        this.formLabel = 'Edit Order';
      }
      this.initFormOnUpdate();
    }
  }

  initFormOnUpdate(): void {
    this.spinner();
    this.ordersService.getOneOrder(this.orderId).subscribe(res => {
      const data = res.data;
      this.order = {
        _id: data._id,
        productName: data.productName,
        productDescription: data.productDescription,
        date: data.date
      };
    }, err => {
      this.snackbarService.error(err.message);
    }).add(() => {
      this.spinner();
    });
  }

  onClickOrderBtn(): void {
    if (this.orderId) {
      // Update order service
      this.updateOrder();
    } else {
      // Add order service
      this.addOrder();
    }
  }

  addOrder(): void {
    this.spinner();
    const payload: OrderModel = this.order;
    this.ordersService.addOrder(payload).subscribe(res => {
      console.log('res', res);
      this.snackbarService.success('Successfully added');
      this.router.navigate(['/orders']);
    }, (err: HttpErrorResponse) => {
      this.snackbarService.error(err.message);
    }).add(() => {
      this.spinner();
    });
  }

  updateOrder(): void {
    const payload: OrderModel = this.order;
    console.log('???payload', payload);
    this.ordersService.updateOrder(payload).subscribe(res => {
      this.snackbarService.success('Successfully updated');
      this.router.navigate(['/orders']);
    }, (err: HttpErrorResponse) => {
      this.snackbarService.error(err.message);
    }, () => {
      this.spinner();
    });
  }

  spinner(): void {
    this.beginProcess = !this.beginProcess;
  }

}
