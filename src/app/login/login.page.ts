import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {} 

  onLogin(form: NgForm) {
    if (form.valid) {
      console.log('Form is valid', this.user);
      this.router.navigate(['/home']);
    } else {
      console.log('Form is invalid');
    }
  }
}
