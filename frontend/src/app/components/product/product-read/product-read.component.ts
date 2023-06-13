import { ProductService } from '../product.service';
import { Cliente } from './../product.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent {

 products: Cliente[]

 constructor (private productService: ProductService) {}

 ngOnInit(): void {
  this.productService.read().subscribe(products => {
    this.products = products;
    console.log(products)
  })
 }

}