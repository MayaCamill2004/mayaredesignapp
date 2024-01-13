
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { CartService } from '../cart.service'; 


interface Product {
  id: number;
  name: string;
  price: number;

}

@Component({
  selector: 'app-instantduo',
  templateUrl: './instantduo.page.html',
  styleUrls: ['./instantduo.page.scss'],
})
export class InstantduoPage implements OnInit {
  @ViewChild('reviewsSection', { static: false }) reviewsSection!: ElementRef;

  constructor(
    private navCtrl: NavController,
    private router: Router, 
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
   
    };
  
    
    this.cartService.setSelectedProduct(item);
  
    const navigationExtras: NavigationExtras = {
      state: {
        product: item,
      },
    };
  
   
    this.router.navigate(['/cart'], navigationExtras);
  }


  scrollToReviews() {
    const reviewsSectionElement = this.reviewsSection.nativeElement as HTMLElement;
    reviewsSectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  goToHomePage() {
    this.navCtrl.navigateForward('/home');
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

