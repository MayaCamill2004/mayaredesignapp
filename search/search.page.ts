import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  allowedSearchTerms: string[] = ['face care', 'body care', 'hair care', 'skin ageing'];
  searchTerm: string = '';
  searchResults: any[] = [];

  constructor(private navCtrl: NavController, private router: Router) {}

  goToSecondPage() {
    this.navigateTo('/secondhome');
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
      // Navigate to the specific page based on the search term
      this.router.navigate([`/${cleanedSearchTerm.replace(' ', '-').toLowerCase()}`]);
    } else {
      console.log('Invalid search term');
    }
  }
}
