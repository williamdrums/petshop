import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html'
})
export class CartPageComponent implements OnInit {
  public cart: Cart = new Cart();
  constructor(private router: Router) { }

  ngOnInit() {
    this.loadCart();
  }

  public loadCart() {
    this.cart = CartUtil.get();
  }

  public remove(item) {
    const index = this.cart.items.indexOf(item);
    // remove o elemento do array
    this.cart.items.splice(index, 1);
    CartUtil.update(this.cart);
  }

  public total() {
    let total = 0;
    this.cart.items.forEach((item) => {
      total += (item.price * item.quantity);
    });
    return total;
  }

  public clear() {
    CartUtil.clear();
    this.loadCart();
  }
}
