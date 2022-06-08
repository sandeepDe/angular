import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  brandName = '';
  categories!:string[];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getDistinctCategory().subscribe(
      {
        next:(data)=>this.categories=data
      }
    )
  }

  show = () => {
    console.log(`brandName: ${this.brandName}`);
  }
}
