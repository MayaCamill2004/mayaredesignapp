
import { Component } from '@angular/core';
import { ApplePay } from '@ionic-native/apple-pay/ngx';
@Component({
  selector: 'app-applepay',
  templateUrl: './applepay.page.html',
  styleUrls: ['./applepay.page.scss'],
})
export class ApplepayPage {
  constructor(private applePay: ApplePay) {}


  makeApplePayPayment() {
   
    console.log('Making Apple Pay payment...');
  }
}
