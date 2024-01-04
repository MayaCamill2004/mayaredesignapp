import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selectedProduct: any;
  cart: any[] = []; 

  addToCart(product: any): void {
    this.cart.push(product);
  }

  getCart(): any[] {
    return this.cart;
  }

  removeFromCart(product: any): void {
    const index = this.cart.findIndex((item) => item === product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  setSelectedProduct(product: any): void {
    this.selectedProduct = product;
  }

  getSelectedProduct(): any {
    return this.selectedProduct;
  }
}
