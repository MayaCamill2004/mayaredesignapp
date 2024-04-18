import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selectedProduct: any;
  private cart: any[] = [];
  private deliveryAddress: string = '';
  private paymentDetails: string;
  

  constructor() {
  this.paymentDetails = ''; 
}
addToCart(product: any): void {
  const existingProduct = this.cart.find((item) => item.title === product.title);
  if (existingProduct) {
    existingProduct.quantity = parseInt(existingProduct.quantity) + parseInt(product.quantity);
  } else {
    this.cart.push(product);
  }
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

  setAddress(address: string): void {
    this.deliveryAddress = address;
  }

  getAddress(): string {
    return this.deliveryAddress;
  }
  getPaymentDetails(): string {
    return this.paymentDetails;
  }

  setPaymentDetails(details: string): void {
    this.paymentDetails = details;
  }
  updateQuantity(product: any, newQuantity: string): void {
    const cartProduct = this.cart.find((item) => item.title === product.title);
    if (cartProduct) {
      cartProduct.quantity = newQuantity;
    }
  }

  getQuantity(product: any): string {
    const cartProduct = this.cart.find((item) => item.title === product.title);
    return cartProduct ? cartProduct.quantity : '0';
  }
}
 
