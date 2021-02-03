import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent implements OnInit {


  // passando objeto por referencia
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
