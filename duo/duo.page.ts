import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';


interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-duo',
  templateUrl: './duo.page.html',
  styleUrls: ['./duo.page.scss'],
})
export class DuoPage implements OnInit {
  @ViewChild('reviewsSection', { static: false }) reviewsSection!: ElementRef;

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goToCartPage(): void {
    this.navCtrl.navigateForward('/cart');
  }

  addToBag(): void {
    const item: Product = {
      id: 1,
      name: 'The Tinted Glow Duo',
      price: 52.40,
      
    };

    const navigationExtras: NavigationExtras = {
      state: {
        product: item
      }
    };

    this.router.navigate(['/cart'], navigationExtras);
  }


  scrollToReviews() {
    const reviewsSectionElement = this.reviewsSection.nativeElement as HTMLElement;
    reviewsSectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

