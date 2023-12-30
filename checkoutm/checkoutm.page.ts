
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkoutm',
  templateUrl: 'checkoutm.page.html',
  styleUrls: ['checkoutm.page.scss'],
})
export class CheckoutmPage {
  cartItems: any[] = [];
  promoCode: string = '';
  selectedDeliveryAddress: string = '';
  selectedDeliveryOption: string = '';
  selectedPaymentType: string = '';
  subTotal: number = 20; 
  deliveryCost: number = 7; 
  deliveryOptions = [
    { label: 'Standard Delivery (€7)', value: 'standard' },
    { label: 'Next Day Delivery (€20)', value: 'nextDay' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.cartItems = JSON.parse(params['cartItems'] || '[]');
      this.calculateSubTotal(); 
    });
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

  changeDeliveryOption(option: any) {
    this.selectedDeliveryOption = option.value;
    if (option.value === 'standard') {
      this.deliveryCost = 7;
    } else if (option.value === 'nextDay') {
      this.deliveryCost = 20;
    }
    this.calculateSubTotal(); 
  }

  private validatePromoCode(): boolean {
    return this.promoCode.trim().toUpperCase() === '1200M';
  }

  calculateSubTotal(): number {
    const productSubTotal = this.cartItems.reduce((total, item) => total + item.price, 0);
    this.subTotal = productSubTotal + this.deliveryCost;
    return this.subTotal;
  }

  changeDeliveryAddress() {
    this.router.navigate(['/add-address']);
  }
  confirmorder() {
    this.router.navigate(['/confirmorder']);
  }


  

}
