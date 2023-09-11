import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    
  }

  addNewProduct(form: NgForm){
    let newProduct={
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
    this.productService.createProduct(newProduct).subscribe(
      data => {
        console.log(data)
      }
    )
    
  }


}
