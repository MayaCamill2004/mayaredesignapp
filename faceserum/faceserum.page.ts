import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-faceserum',
  templateUrl: './faceserum.page.html',
  styleUrls: ['./faceserum.page.scss'],
})
export class FaceserumPage implements OnInit {

  faceSerumProducts = [
    { image: 'assets/Hydratingserum.png', title: 'Hydrating Serum', description: 'with 11% Vitamin C', price: '£15.90', isFavorite: false },
    { image: 'assets/RadianceSerum.png', title: 'Radiance Serum', description: 'with 3% Hyaluronic Acid + 2% B5 ', price: '£15.50', isFavorite: false },
    { image: 'assets/tannedcomplecionserum.png', title: 'Tanned complexion serum', description: 'Botanical blend with buriti', price: '£24.90', isFavorite: false },
    { image: 'assets/threeserums.png', title: 'Trio of serums', description: 'Dry skin', price: '$51.00', isFavorite: false },
    { image: 'assets/trio.png', title: 'The TEN Essentials Trio', description: 'TEN essentials ', price: '£49.40', isFavorite: false },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goToSecondPage() {
    this.navCtrl.navigateForward('/secondhome');
  }

  goToFavouritesPage(): void {
    this.navCtrl.navigateForward('/favourites');
  }

  toggleFavorite(product: any) {
    product.isFavorite = !product.isFavorite;

    
  }
}
