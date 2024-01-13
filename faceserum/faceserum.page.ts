import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FavoriteService } from '../favorite.service';


interface Product {
  image: string;
  title: string;
  description: string;
  price: string;
  isLiked: boolean;
}

@Component({
  selector: 'app-faceserum',
  templateUrl: './faceserum.page.html',
  styleUrls: ['./faceserum.page.scss'],
})
export class FaceserumPage {
  selectedSortOption: string = 'recentlyAdded'; 
  products: Product[] = [

    { image: 'assets/Hydratingserum.png', title: 'Hydrating Serum', description: 'with 11% Vitamin C', price: '£15.90', isLiked: false },
    { image: 'assets/RadianceSerum.png', title: 'Radiance Serum', description: 'with 3% Hyaluronic Acid + 2% B5 ', price: '£15.50', isLiked: false },
    { image: 'assets/tannedcomplecionserum.png', title: 'Tanned complexion serum', description: 'Botanical blend with buriti', price: '£24.90', isLiked: false },
    { image: 'assets/threeserums.png', title: 'Trio of serums', description: 'Dry skin', price: '$51.00', isLiked: false },
    { image: 'assets/trio.png', title: 'The TEN Essentials Trio', description: 'TEN essentials ', price: '£49.40', isLiked: false },
  ];

  constructor(private navCtrl: NavController, private favoriteService: FavoriteService) {}

  ngOnInit() {}

  goToSecondPage() {
    this.navCtrl.navigateForward('/secondhome');
  }

  goToFavouritesPage(): void {
    this.navCtrl.navigateForward('/favourites');
  }
  goToCartPage() {
    this.navCtrl.navigateForward('/cart'); 
  }

  toggleLike(index: number): void {
    const product = this.products[index];
    product.isLiked = !product.isLiked;

    if (product.isLiked) {
      this.favoriteService.addToFavorites(product);
    } else {
      this.favoriteService.removeFromFavorites(product);
    }
  }

  addToFavorites(product: Product): void {
    this.favoriteService.addToFavorites(product);
  }
    
  }