import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit{
  productId = 0;
  constructor(private acivatedRoute : ActivatedRoute, private productService: ProductsService){}
  ngOnInit(): void {
    this.acivatedRoute.params.subscribe(
      data => {
        this.productId = data['id'];
        debugger
    
      });

   
  }

  deleteProductWithId(productId: number)
  {
    this.productService.deleteProduct(this.productId).subscribe(
      data => {
        debugger
        console.log(data)
        console.log("Deleted")
      }
    )
  }



}
