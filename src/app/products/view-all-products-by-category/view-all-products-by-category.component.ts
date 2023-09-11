import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {
  searchCategory : Category[]=[];
  productList : Product[]=[];
  
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      data => {
        this.searchCategory = data['id'];
        console.log(this.searchCategory)
    this.productService.searchCategoryproducts(this.searchCategory).subscribe(
       catData => {
        console.log(catData);
       this.productList = catData;
      }
    )

      }
    );

  

  }

}
