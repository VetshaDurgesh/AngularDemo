import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Input()
  Prod: Product = new Product();

  @Output()
  OnCartClicked = new EventEmitter();
  ngOnInit(): void {
  }


  AddCart() {
    this.OnCartClicked.emit(this.Prod);
  }
}
