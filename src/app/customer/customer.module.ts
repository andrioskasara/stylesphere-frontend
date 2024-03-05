import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DemoMaterialModule } from '../DemoMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { UsersOrdersComponent } from './components/users-orders/users-orders.component';


@NgModule({
  declarations: [
    CustomerComponent,
    DashboardComponent,
    CartComponent,
    PlaceOrderComponent,
    UsersOrdersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoMaterialModule
  ]
})
export class CustomerModule { }
