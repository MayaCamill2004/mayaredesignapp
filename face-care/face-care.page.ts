import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-face-care',
  templateUrl: './face-care.page.html',
  styleUrls: ['./face-care.page.scss'],
})
export class FaceCarePage implements OnInit {
  products = [
    { image: 'assets/Hydratingserum.png', title: 'Hydrating Serum', description: 'with 11% Vitamin C', price: '£15.90' , isFavorite: false},
    { image: 'assets/RadianceSerum.png', title: 'Radiance Serum', description: 'with 3% Hyaluronic Acid + 2% B5 ', price: '£15.50', isFavorite: false},
    { image: 'assets/tannedcomplecionserum.png', title: 'Tanned complexion serum', description: 'Botanical blend with buriti', price: '£24.90' , isFavorite: false},
    { image: 'assets/threeserums.png', title: 'Trio of serums', description: 'Dry skin', price: '$51.00', isFavorite: false },
    { image: 'assets/trio.png', title: 'The TEN Essentials Trio', description: 'TEN essentials ', price: '£49.40', isFavorite: false },
    { image: 'assets/single.png', title: '9-Ingredient Face Moisturiser', description: '99% naturally derived. Vegan. Made in France.', price: '£22.50', isFavorite: false},
    { image: 'assets/single.png', title: 'Purifying Moisturiser', description: 'with 4% Zinc PCA + Bamboo Extract', price: ' £27.90' , isFavorite: false},
    { image: 'assets/single.png', title: 'Nourishing moisturiser', description: '1% Hyaluronic Acid + Shea Butter', price: '£27.90', isFavorite: false },
    { image: 'assets/single.png', title: 'Firming Moisturiser', description: '  0.2% Retinol + Tsubaki Oil', price: '£30.90' , isFavorite: false},
    { image: 'assets/nightcare1.png', title: 'Organic Prickly Pear', description: 'Botanical Oil', price: '  £18.90', isFavorite: false },
    { image: 'assets/nightcare2.png', title: 'Botanical Blend for Sensitive Skin', description: 'with 650 mg CBD ', price: '£41.90', isFavorite: false },
    { image: 'assets/nightcare3.png', title: 'Firming night mask', description: 'with organic prickly pear oil ', price: '£36.50' , isFavorite: false},
    { image: 'assets/nightcare4.png', title: 'Tanned complexion serum', description: ' Botanical blend with buriti ', price: 'from £24.90', isFavorite: false },
    { image: 'assets/duo.png', title: 'Tinted duo', description: 'with 650 mg CBD ', price: '£41.90' , isFavorite: false},
    { image: 'assets/instantduo.png', title: 'The Tinted Glow Duo ', description: 'Tint and illuminate. ', price: ' £52.40', isFavorite: false },
    { image: 'assets/softtint.png', title: 'Tanned complexion serum', description: ' Botanical blend with buriti ', price: 'from £24.90', isFavorite: false },
    { image: 'assets/three.png', title: 'Tinted Trio', description: 'Our three bestselling tinted formulations for a natural', price: '£76.50' , isFavorite: false},
    { image: 'assets/tintedcomplexion.png', title: 'Tinted complexion duo', description: ' Formulated with actives like vitamin C and aloe vera', price: '£80.90' , isFavorite: false},
    
    
    
  ];

  favorites: any[] = [];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  navigateToProductType(event: any) {
    const selectedValue = event.detail.value;

    switch (selectedValue) {
      case 'moisturizers':
        this.navCtrl.navigateForward('/moisturizers');
        break;
      case 'cleansers':
        this.navCtrl.navigateForward('/faceserum');
        break;
      case 'Night care':
        this.navCtrl.navigateForward('/nightcare');
        break;
      case 'Tinted care':
        this.navCtrl.navigateForward('/tintedcareee');
        break;
      default:
        break;
    }
  }

  goToSecondPage() {
    this.navCtrl.navigateForward('/secondhome');
  }

  goToFavouritesPage(): void {
    this.navCtrl.navigateForward('/favourites');
  }

  toggleFavorite(product: any): void {
    product.isFavorite = !product.isFavorite;

    if (product.isFavorite) {
      this.addToFavorites(product);
    } else {
      this.removeFromFavorites(product);
    }
  }

  addToFavorites(product: any): void {
    if (!this.isInFavorites(product)) {
      this.favorites.push(product);
    }
  }

  removeFromFavorites(product: any): void {
    this.favorites = this.favorites.filter((favProduct) => favProduct !== product);
  }

  isInFavorites(product: any): boolean {

    return this.favorites.some((favProduct) => favProduct === product);
  }
}