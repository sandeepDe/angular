import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products !:Product[];
type=''
  constructor(private _activatedRoute: ActivatedRoute , private _productService:ProductService , private _router:Router) { 



  }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(map =>{
      let type = map.get('type');

      if(type){
        this.type = type ;

      }
      this._productService.getByType(this.type).subscribe({
        next:data => this.products = data
      })

      
    })


    
  }

  onSubmit =(product:Product)=>{
    console.log(product);
    //  to navigate to productDetails Component
    this._router.navigate(["/product-details",product.productId])
  }


}


