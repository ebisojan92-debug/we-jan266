import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {

  // we are using @Input here so that the properties values are set by the 
  // parent component (app.html)
  @Input("name") name!: string;
  @Input("price") price!:number;

}
