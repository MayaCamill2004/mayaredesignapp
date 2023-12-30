import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular'; // Correct import



@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.page.html',
  styleUrls: ['./paymentmethod.page.scss'],
})
export class PaymentmethodPage {
  cardTitle!: string;
  cardNumber!: string;
  expiryMonth!: string;
  expiryYear!: string;
  cardHolderName!: string;
  cvv!: string;

  constructor(private router: Router, private ionRouterOutlet: IonRouterOutlet) {}


  useCard() {
    console.log('Card details submitted:', this.cardTitle, this.cardNumber, this.expiryMonth, this.expiryYear, this.cardHolderName, this.cvv);

    
    this.ionRouterOutlet.pop(); 
  }
}