import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  // Add other properties as needed
}

@Component({
  selector: 'app-softtint',
  templateUrl: './softtint.page.html',
  styleUrls: ['./softtint.page.scss'],
})
export class SofttintPage implements OnInit {
  @ViewChild('reviewsSection', { static: false }) reviewsSection!: ElementRef;

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goToCartPage(): void {
    this.navCtrl.navigateForward('/cart');
  }

  addToBag(): void {
    // Assuming you have a Product object defined somewhere
    const item: Product = {
      id: 1,
      name: 'Soft Tint', // Example name
      price: 20.99, // Example price
      // Add other properties as needed
    };

    // Use Angular Router Navigation Extras to pass data to the cart page
    const navigationExtras: NavigationExtras = {
      state: {
        product: item
      }
    };

    this.router.navigate(['/cart'], navigationExtras);
  }

  // Function to scroll to reviews section
  scrollToReviews() {
    const reviewsSectionElement = this.reviewsSection.nativeElement as HTMLElement;
    reviewsSectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  goToSecondHomePage(): void {
    this.navCtrl.navigateBack('/secondhome');
  }

  goToFavouritesPage(): void {
    this.navCtrl.navigateForward('/favourites');
  }

  goToSearchPage(): void {
    this.navCtrl.navigateForward('/search');
  }

  goToAccountPage(): void {
    this.navCtrl.navigateForward('/account');
  }

}
