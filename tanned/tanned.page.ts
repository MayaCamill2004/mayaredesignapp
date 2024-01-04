import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { CartService } from '../cart.service'; 

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  // Add other properties as needed
}
@Component({
  selector: 'app-tanned',
  templateUrl: './tanned.page.html',
  styleUrls: ['./tanned.page.scss'],
})
export class TannedPage implements OnInit {

  @ViewChild('reviewsSection', { static: false }) reviewsSection!: ElementRef;

  constructor(
    private navCtrl: NavController,
    private router: Router, // Add this line to inject the Router
    private cartService: CartService
  ) {}

  ngOnInit() {
  }

  goToCartPage(): void {
    this.navCtrl.navigateForward('/cart');
  }

  addToBag(): void {
    const item: Product = {
      id: 1,
      name: 'Natural Radiance Duo',
      price: 46.80,
      // Add other properties as needed
    };
  
    // Store the selected product in the CartService
    this.cartService.setSelectedProduct(item);
  
    const navigationExtras: NavigationExtras = {
      state: {
        product: item,
      },
    };
  
    // Navigate to the cart page with the product data
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
