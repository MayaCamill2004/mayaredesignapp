import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service'; 
@Component({
  selector: 'app-checkoutm',
  templateUrl: 'checkoutm.page.html',
  styleUrls: ['checkoutm.page.scss'],
})
export class CheckoutmPage {
  cartItems: any[] = [];
  promoCode: string = '';
  selectedDeliveryAddress: string = '';
  selectedDeliveryOption: string = 'standard';
  selectedPaymentType: string = '';
  subTotal: number = 0; 
  deliveryCost: number = 7; 
  totalToPay: number = 0;
  deliveryOptions = [
    { label: 'Standard Delivery (€7)', value: 'standard' },
  ];

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ionViewWillEnter() {
    this.cartItems = this.cartService.getCart();
    this.selectedDeliveryAddress = this.cartService.getAddress();
    this.selectedPaymentType = this.cartService.getPaymentDetails();
    this.calculateSubTotal();
    this.calculateTotalToPay();
  }
  
  


  confirmOrder() {
    if (this.validatePromoCode()) {
      this.router.navigate(['/confirmorder']);
    } else {
      console.log('Invalid promo code. Please enter a valid code.');
    }
  }
  changePaymentType() {
    this.router.navigate(['/paymentmethod']);
  }
  changeDeliveryAddress() {
    this.router.navigate(['/address']);
  }
  

  private validatePromoCode(): boolean {
    return this.promoCode.trim().toUpperCase() === '1200M';
  }

  calculateTotalToPay(): void {
    this.totalToPay = this.subTotal + this.deliveryCost;
  }
  changeDeliveryOption() {
    this.deliveryCost = this.selectedDeliveryOption === 'standard' ? 7 : 20;
    this.calculateTotalToPay();
  }
  
  confirmorder() {
    this.router.navigate(['/confirmorder']);
  }
  calculateSubTotal(): number {
    this.subTotal = this.cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
    return this.subTotal;
  }

  

  

}

