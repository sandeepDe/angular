import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeView } from 'src/app/models/type-view';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.css']
})
export class ProductTypesComponent implements OnInit {
  category: string | undefined = ''
  typeViews!: TypeView[]
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((map) => {
      let cat = map.get('category');// this is variable passed in the path
      if (cat) {
        this.category = cat
        console.log(`${cat}`)
        this._productService.getDistinctTypes(this.category).subscribe({
          next: (data) => this.typeViews = data
        })
      }
    })
  }

}
