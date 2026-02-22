import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {

  @Input("name") name!: string;
  @Input("price") price!:number;

}
