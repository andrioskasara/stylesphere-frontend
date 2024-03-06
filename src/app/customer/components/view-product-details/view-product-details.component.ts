import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { UserStorageService } from '../../../services/storage/user-storage.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrl: './view-product-details.component.scss'
})
export class ViewProductDetailsComponent {

  productId: number = this.activatedRoute.snapshot.params["productId"];
  product: any;
  reviews: any[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProductDetailsById();
  }

  getProductDetailsById() {
    this.customerService.getProductDetailsById(this.productId).subscribe(
      res => {
        this.product = res.productDto;
        this.product.processedImg = 'data:image/png;base64,' + res.productDto.byteImg;
        res.reviewDtoList.forEach(element => {
          element.processedImg = 'data:image/png;base64,' + element.returnedImg;
          this.reviews.push(element);
        });
      }
    )
  }

  addToWishlist() {
    const wishlistDto = {
      productId: this.productId,
      userId: UserStorageService.getUserId()
    }
    this.customerService.addProductToWishlist(wishlistDto).subscribe(
      res => {
        if (res.id != null) {
          this.snackBar.open("Product added to wishlist successfully", "Close", { duration: 5000 });
        } else {
          this.snackBar.open("Already in wishlist", "Close", { duration: 5000 });
        }
      }
    )
  }
}
