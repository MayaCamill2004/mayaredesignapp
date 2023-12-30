// register.page.ts

import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {

  constructor(private router: Router) {}

  registerAndNavigate() {
    this.router.navigate(['/secondhome']);
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }
}
