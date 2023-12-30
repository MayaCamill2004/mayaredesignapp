import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {

  selectedImage: any;

  constructor(private navCtrl: NavController) { }

  goToCartPage() {
    this.navigateTo('/cart');
  }

  private navigateTo(pagePath: string): void {
    this.navCtrl.navigateForward(pagePath);
  }

  handleFileInput(event: any): void {
    if (event.target && event.target.files) {
      const file = event.target.files[0];

      if (file) {

        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedImage = e.target?.result; 
        };
        reader.readAsDataURL(file);
      }
    }
  }

  // signOut method
  signOut(): void {
    console.log('Signing out...');
  }
}
