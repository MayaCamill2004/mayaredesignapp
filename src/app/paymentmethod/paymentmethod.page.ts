import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.page.html',
  styleUrls: ['./paymentmethod.page.scss'],
})
export class PaymentmethodPage {
  cardTitle: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cardHolderName: string = '';
  cvv: string = '';
  formSubmitted: boolean = false;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  useCard() {
    this.formSubmitted = true;

    if (!this.validateForm()) {
      return;
    }

    console.log('Card details submitted:', this.cardTitle, this.cardNumber, this.expiryDate, this.cardHolderName, this.cvv);

    // Save the payment details as the default payment
    const defaultPayment = {
      cardTitle: this.cardTitle,
      cardNumber: this.cardNumber,
      expiryDate: this.expiryDate,
      cardHolderName: this.cardHolderName,
      cvv: this.cvv,
    };
    localStorage.setItem('defaultPayment', JSON.stringify(defaultPayment));

    // Navigate to the account page
    this.router.navigate(['/checkoutm']);
  }

  validateForm(): boolean {
    if (!this.cardTitle || !this.cardNumber || !this.expiryDate || !this.cardHolderName || !this.cvv) {
      this.presentAlert('All fields are required');
      return false;
    }

    if (!/^\d+$/.test(this.cardNumber)) {
      this.presentAlert('Card number must contain only numeric digits');
      return false;
    }

    if (!/^\d+$/.test(this.cvv)) {
      this.presentAlert('CVV must contain only numeric digits');
      return false;
    }

    
    const [month, year] = this.expiryDate.split('/');
    const currentYear = new Date().getFullYear().toString().slice(-2);
    if (isNaN(+month) || isNaN(+year) || +month < 1 || +month > 12 || +year < +currentYear) {
      this.presentAlert('Invalid expiry date format or expired card');
      return false;
    }

    return true;
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
