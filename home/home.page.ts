import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  loginAndNavigate() {
    
    if (!this.email || !this.password) {
      // Show error message
      console.error('Please enter both email and password.');
      return;
    }

    

    //  navigate to the second home page
    this.router.navigate(['/secondhome']);
  }
}
