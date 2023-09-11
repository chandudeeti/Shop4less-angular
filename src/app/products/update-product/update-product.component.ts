import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { NgForm } from '@angular/forms';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;

  productDetails: any;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductsService 
             ){}
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      data => {
        this.productId = data['id'];
debugger
        this.productService.viewProduct(this.productId).subscribe(
         data => {
          this.productDetails=data
         }
        );
      });

     
    
  }

  updateProduct(form: any)
  
  {
    debugger
    console.log(form)

    

    let updateProduct={
      productId:17,
      categoryId: form.value.category_Id,
      productName: form.value.product_name,
      description: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: 1,
      color: form.value.product_color,
      reviews: form.value.product_reviews
    };

    debugger
    this.productService.updateProduct(this.productId,updateProduct).subscribe(
      data => {
        console.log(data)
      });
  }

}
