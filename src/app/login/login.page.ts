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

  //Api using spotify app created details
  loginWithSpotify() {
    const clientId = 'c0fa398ec1dd4976822464b88deef3e8';
    const redirectUri = encodeURIComponent('http://localhost:8100/home');
    const scope = 'user-read-private user-read-email'; // Adjust the scope based on your requirements

    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    window.location.href = spotifyAuthUrl;
  }
}
