

import { Injectable } from '@angular/core';
import { Product } from './favorite.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  getCart(): Product[] {
    return this.cart;
  }

  removeFromCart(product: Product): void {
    const index = this.cart.findIndex((item) => item === product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
