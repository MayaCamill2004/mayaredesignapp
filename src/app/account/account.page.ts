import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  userImage: string | null | Blob = null;
  userName: string = 'Maya Camilleri'; 
  showOptions: boolean = false; 

  //navigate pages
  constructor(private router: Router, private navCtrl: NavController) {}

  goToAddressPage(): void {
    this.router.navigate(['/address']);
  }  
  
  goToOrdersPage() {
    this.router.navigate(['/orders']);
  }

  goToCartPage() {
    this.navigateTo('/cart');
  }

  goToHomePage() {
    this.navigateTo('/home');
  }

  goToFavouritesPage() {
    this.navigateTo('/favourites');
  }

  navigateToTintedCare() {
    this.navigateTo('/tintedcare');
  }

  navigateToFaceCare(){
    this.navigateTo('/facecare');
  }

  goToSearchPage() {
    this.navigateTo('/search');
  }

  goToAccountPage() {
    this.navigateTo('/account'); 
  }

  private navigateTo(pagePath: string): void {
    this.navCtrl.navigateForward(pagePath);
  }

  handleFileInput(event: any): void {
    if (event.target && event.target.files) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.userImage = e.target?.result as string; 
          this.showOptions = false; 
        };
        reader.readAsDataURL(file);
      }
    }
  }


  signOut(): void {
    // Navigate to the login 
    this.navCtrl.navigateRoot(['/login']);
  }

  openFileInput(input: HTMLInputElement): void {
    input.click();
    this.showOptions = false;
  }

// open camera for profile pic update 
  openCamera(): void {
    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Access the camera and video feed
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          // Create a new video element
          const video = document.createElement('video');
          video.srcObject = stream;
          video.autoplay = true;

          document.body.appendChild(video);
  
          // button to capture the photo
          const captureButton = document.createElement('button');
          captureButton.textContent = 'Capture Photo';
          document.body.appendChild(captureButton);
  
          // Capture the photo when the capture button is clicked
          captureButton.addEventListener('click', () => {
            // Pause the video feed
            video.pause();
            // Capture a frame from the video stream
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (context) {
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
              context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
              // Convert the canvas content to a Blob
              canvas.toBlob(blob => {
                if (blob) {
                  // Create a FormData object to send the image
                  const formData = new FormData();
                  formData.append('profilePicture', blob, 'profile_picture.jpg');
                 
       
                  fetch('your-upload-url', {
                    method: 'POST',
                    body: formData,
                  })
                  .then(response => {
                    console.log('Image uploaded successfully');
                  })
                  .catch(error => {
                    // Handle error
                    console.error('Error uploading image:', error);
                  });
                }
              }, 'image/jpeg');
            } else {
              console.error('Canvas context is null.');
            }
          });
        })
        .catch(error => {
          // Handle errors, such as user denying access to the camera
          console.error('Error accessing camera:', error);
        });
    } else {
      // Browser doesn't support getUserMedia
      console.error('getUserMedia is not supported on this browser');
    }
  }
}  