import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FavoriteService } from '../favorite.service';

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
    { image: 'assets/softtint.png', title: 'Soft Tint', price: '$20.99', isLiked: false },
    { image: 'assets/duo.png', title: 'Duo Product', price: '$25.99', isLiked: false },
    { image: 'assets/instantduo.png', title: 'Third Product', price: '$19.99', isLiked: false },
    { image: 'assets/tintedcomplexion.png', title: 'Fourth Product', price: '$22.99', isLiked: false },
    { image: 'assets/two.png', title: 'Fifth Product', price: '$24.99', isLiked: false },
    { image: 'assets/three.png', title: 'Sixth Product', price: '$27.99', isLiked: false },
  ];

  constructor(private navCtrl: NavController, private favoriteService: FavoriteService) {}

  addToFavorites(product: Product): void {
    this.favoriteService.addToFavorites(product);
  }

  toggleLike(index: number): void {
    const product = this.products[index];
    product.isLiked = !product.isLiked;

    if (product.isLiked) {
      this.addToFavorites(product);
    } else {
      this.favoriteService.removeFromFavorites(product);
    }
  }

  goToSecondHomePage(): void {
    this.navCtrl.navigateBack('/secondhome');
  }

  goToFavouritesPage(): void {
    this.navCtrl.navigateForward('/favourites');
  }
}
