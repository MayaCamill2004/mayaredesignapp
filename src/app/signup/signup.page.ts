import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  newUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private navCtrl: NavController) {}

  onSignup(form: NgForm) {
    if (form.valid) {
      console.log('Signup form is valid', this.newUser);
      this.navCtrl.navigateRoot('/home');
    } else {
      console.log('Signup form is invalid');
    }
  }
}
