import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-secondhome',
  templateUrl: './secondhome.page.html',
  styleUrls: ['./secondhome.page.scss'],
})
export class SecondhomePage {

  constructor(private navCtrl: NavController) {}

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

  goToCartPage() {
    this.navigateTo('/cart'); 
  }

  goToAccountPage() {
    this.navigateTo('/account'); 
  }

  private navigateTo(page: string) {
    this.navCtrl.navigateForward(page)
      .catch(error => console.error(`Navigation failed: ${error}`));
  }
}
