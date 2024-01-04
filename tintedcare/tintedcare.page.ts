// tintedcare.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FavoriteService } from '../favorite.service';
import { Router } from '@angular/router';


interface Product {
  image: string;
  title: string;
  price: string;
  isLiked: boolean;
}

@Component({
  selector: 'app-tintedcare',
  templateUrl: './tintedcare.page.html',
  styleUrls: ['./tintedcare.page.scss'],
})
export class TintedcarePage {
  products: Product[] = [
    { image: 'assets/softtint.png', title: 'Soft Tint', price: ' €20.99', isLiked: false },
    { image: 'assets/duo.png', title: 'The Tinted Glow Duo', price: ' €52.40', isLiked: false },
    { image: 'assets/instantduo.png', title: 'Natural Radiance duo', price: ' €46.80', isLiked: false },
    { image: 'assets/tintedcomplexion.png', title: 'Tinted Complexion', price: ' €54.40', isLiked: false },
    { image: 'assets/two.png', title: 'The Instant Radiance Duo', price: ' €44.00', isLiked: false },
    { image: 'assets/three.png', title: 'Tinted Trio', price: ' €74.90', isLiked: false },
  ];
  constructor(private navCtrl: NavController, private favoriteService: FavoriteService, private router: Router) {}


  addToFavorites(product: Product): void {
    this.favoriteService.addToFavorites(product);
  }

  toggleLike(index: number): void {
    const product = this.products[index];
    product.isLiked = !product.isLiked;

    if (product.isLiked) {
      this.favoriteService.addToFavorites(product);
    } else {
      this.favoriteService.removeFromFavorites(product);
    }

    this.goToProductPage(product);
  }

  

  

  goToProductPage(product: Product): void {
    if (product.title === 'Natural Radiance duo') {
      this.router.navigate(['/instantduo']);
    } else if (product.title === 'Soft Tint') {
      this.router.navigate(['/softtint']);
    } else if (product.title === 'The Tinted Glow Duo') {
      this.router.navigate(['/tintedglowduo']);
    } else if (product.title === 'Tinted Complexion') {
      this.router.navigate(['/tintedcomplexion']);
    } else if (product.title === 'The Instant Radiance Duo') {
      this.router.navigate(['/two']);
    } else if (product.title === 'Tinted Trio') {
      this.router.navigate(['/three']);
    } else {
      // For unknown products, navigate to a generic product detail page
      this.router.navigate(['/productdetail', { productId: 'generic' }]);
    }
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

  sortProductsLowToHigh(): void {
    this.products.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
  }

  sortProductsHighToLow(): void {
    this.products.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
  }

  onSortChange(event: CustomEvent): void {
    const selectedSort = event.detail.value;
    if (selectedSort === 'recentlyAdded') {
      this.sortProductsLowToHigh();
    } else if (selectedSort === 'Expiring soonest') {
      this.sortProductsHighToLow();
    }
  }
}
