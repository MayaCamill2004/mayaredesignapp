


import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  allowedSearchTerms: string[] = ['facecare', 'bodycare', 'faceserum','bodyscrub','shampoos','showers','skinageing','tintedcare', 'skinageing'];
  searchTerm: string = '';
  searchResults: any[] = [];

  constructor(private navCtrl: NavController, private router: Router) {}

  goToHomePage() {
    this.navCtrl.navigateForward('/home');
  }
  goToFavouritesPage() {
    this.navigateTo('/favourites');
  }

  goToSearchPage() {
    this.navigateTo('/search');
  }
  goToNewInPage() {
    this.navigateTo('/newin');
  }

  private navigateTo(page: string) {
    this.navCtrl.navigateForward(page);
  }

  onSearch() {
    const cleanedSearchTerm = this.searchTerm.toLowerCase().trim();

    if (cleanedSearchTerm && this.allowedSearchTerms.includes(cleanedSearchTerm)) {
      
      this.router.navigate([`/${cleanedSearchTerm.replace(' ', '-').toLowerCase()}`]);
    } else {
      console.log('Invalid search term');
    }
  }
}

