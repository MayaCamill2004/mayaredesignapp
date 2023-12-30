import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Product {
  title: string;
  image: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-newin',
  templateUrl: 'newin.page.html',
  styleUrls: ['newin.page.scss'],
})
export class NewinPage {
  products: (Product & { customFavorite?: boolean })[] = [
    {
      title: 'Purifying Treatment Shampoo ',
      image: 'assets/shampoo.png',
      description: 'with 1% Zinc Gluconate + Nettle Extract',
      price: '€19.99',
    },
    {
      title: 'Hydrating Cleansing Bar With Palmarosa',
      image: 'assets/bar.png',
      description: 'A hydrating face and body soap with 8% fatty acids.',
      price: '€24.99',
     
    },
    
    {
      title: 'Tinted Concealer',
      image: 'assets/tinte.png',
      description: 'Medium high coverage - Natural finish',
      price: '€15.99',
   
    },
    {
      title: 'Exfoliating and Fortifying Haircare Duo',
      image: 'assets/haircare.png',
      description: 'Help maintain a healthy, balanced scalp and fortified hair follicles',
      price: '€15.99',
     
    },
    {
      title: 'Rebalancing Cleansing Bar With Nettle',
      image: 'assets/green.png',
      description: 'An oil-regulating face and body soap with 8% fatty acids.',
      price: '€15.99',
      
    },
    {
      title: 'SPF 50 Body Sunscreen ',
      image: 'assets/suncare.png',
      description: ' with Aloe Vera ',
      price: '€15.99',
      
    },
    
  ];

  constructor(private navCtrl: NavController) {}

  navigateTo(pagePath: string): void {
    this.navCtrl.navigateForward(pagePath);
  }

  toggleFavorite(product: Product): void {
    const index = this.products.findIndex(p => p.title === product.title);

    if (index !== -1) {
      // Toggle the customFavorite property
      this.products[index].customFavorite = !this.products[index].customFavorite;
    }
  }

  goToProductDetailsPage(productId: string) {
   
    console.log(`Navigating to product details page for ${productId}`);
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

  navigateToFaceCare() {
    this.navigateTo('/facecare');
  }

  goToSearchPage() {
    this.navigateTo('/search');
  }

 
  goToCartPage() {
    this.navigateTo('/cart'); 
  }
 
}
