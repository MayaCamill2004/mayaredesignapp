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

 // Helper method to handle navigation to a specified page path
 private navigateTo(pagePath: string): void {
  this.navCtrl.navigateForward(pagePath);
}

// Handle the file input change event for profile picture upload
handleFileInput(event: any): void {
  if (event.target && event.target.files) {
    const file = event.target.files[0];

    if (file) {
      // Create a FileReader to read the file
      const reader = new FileReader();
      reader.onload = (e) => {
        // Set the user image to the file's content and hide options
        this.userImage = e.target?.result as string; 
        this.showOptions = false; 
      };
      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  }
}

// Sign out and navigate to the login page
signOut(): void {
  this.navCtrl.navigateRoot(['/login']);
}

// Open file input for profile picture upload
openFileInput(input: HTMLInputElement): void {
  input.click();
  this.showOptions = false;
}

// Method to open camera for profile picture update
openCamera(): void {
  // Check if the browser supports getUserMedia
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Access the camera and video feed
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        // Create a new video element to display the video feed
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        document.body.appendChild(video);

        // Create a button to capture the photo
        const captureButton = document.createElement('button');
        captureButton.textContent = 'Capture Photo';
        document.body.appendChild(captureButton);

        // Event listener to capture the photo when the capture button is clicked
        captureButton.addEventListener('click', () => {
          // Pause the video feed
          video.pause();
          // Capture a frame from the video stream and draw it on a canvas
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (context) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(blob => {
              if (blob) {
                // Create a FormData object to send the image
                const formData = new FormData();
                formData.append('profilePicture', blob, 'profile_picture.jpg');
               
                // Send the FormData object as a POST request to upload the image
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