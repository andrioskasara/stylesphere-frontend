import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  carItems: any[] = [];
  order: any;

  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit():void {
    this.getCart();
  }

  getCart() {
    this.carItems = [];
    this.customerService.getCartByUserId().subscribe(
      res => {
        this.order = res;
        res.carItems.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64' + element.returnedImg;
          this.carItems.push(element);
        })
      }
    )
  }

}
