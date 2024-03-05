import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-users-orders',
  templateUrl: './users-orders.component.html',
  styleUrl: './users-orders.component.scss'
})
export class UsersOrdersComponent {
  myOrders: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getUsersOrders();
  }

  getUsersOrders() {
    this.customerService.getOrdersByUserId().subscribe(
      res => {
        this.myOrders = res;
      }
    )
  }

}
