import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';




@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  selectedImage: any;
  userName: string = "Maya Camilleri";

  constructor(private router: Router, private navCtrl: NavController) {}

  goToPaymentMethodPage(): void {
    this.router.navigate(['/paymentmethod']);
  }  
  
  goToAddressPage(): void {
    this.router.navigate(['/address']);
  }  
  
  goToMyOrders() {
    this.router.navigate(['/myorders']);
  }

  goToCartPage() {
    this.navigateTo('/cart');
  }
  goToSecondPage() {
    this.navigateTo('/secondhome');
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





 

