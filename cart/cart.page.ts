
import { Component } from '@angular/core';
import { CartService } from '../cart.service'; 
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  cartItems: any[] = []; 
  selectedProduct: any;

  constructor(private cartService: CartService, private navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    this.selectedProduct = this.cartService.getSelectedProduct();
    this.loadCartItems();
  }
  

  applePay() {
    this.router.navigate(['/applepay']);
  }
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  deleteFromCart(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    this.cartService.removeFromCart(item);
  }

  private loadCartItems() {
    this.cartItems = this.cartService.getCart().map(item => ({ ...item, quantity: 1 }));
  }

  checkout() {
    this.router.navigate(['/checkoutm'], { queryParams: { cartItems: JSON.stringify(this.cartItems) } });
  }
}

