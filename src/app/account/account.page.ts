import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  userImage: string | null = null;
  userName: string = 'Maya Camilleri'; 

  constructor(private router: Router, private navCtrl: NavController) {

  }

  goToPaymentMethodPage(): void {
    this.router.navigate(['/paymentmethod']);
  }  
  
  goToAddressPage(): void {
    this.router.navigate(['/address']);
  }  
  
  goToOrdersPage() {
    this.router.navigate(['/orders']);
  }

  goToCartPage() {
    this.navigateTo('/cart');
  }
  goToHomePage() {
    this.navigateTo('/home');
  }

  goToFavouritesPage() {
    this.navigateTo('/favourites');
  }

  navigateToTintedCare() {
    this.navigateTo('/tintedcare');
  }

  navigateToFaceCare(){
    this.navigateTo('/facecare');
  }
  goToSearchPage() {
    this.navigateTo('/search');
  }

  goToAccountPage() {
    this.navigateTo('/account'); 
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
          this.userImage = e.target?.result as string; 
        };
        reader.readAsDataURL(file);
      }
    }
  }


  signOut(): void {
    // Navigate to the login 
    this.navCtrl.navigateRoot(['/login']);
  }
}
