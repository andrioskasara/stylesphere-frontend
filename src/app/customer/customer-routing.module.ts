import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { UsersOrdersComponent } from './components/users-orders/users-orders.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'dasboard', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'my-orders', component: UsersOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
