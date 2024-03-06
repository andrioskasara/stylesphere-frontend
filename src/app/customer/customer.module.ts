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
import { ViewOrderedProductsComponent } from './components/view-ordered-products/view-ordered-products.component';
import { ReviewOrderedProductComponent } from './components/review-ordered-product/review-ordered-product.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { ViewWishlistComponent } from './components/view-wishlist/view-wishlist.component';


@NgModule({
  declarations: [
    CustomerComponent,
    DashboardComponent,
    CartComponent,
    PlaceOrderComponent,
    UsersOrdersComponent,
    ViewOrderedProductsComponent,
    ReviewOrderedProductComponent,
    ViewProductDetailsComponent,
    ViewWishlistComponent
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
