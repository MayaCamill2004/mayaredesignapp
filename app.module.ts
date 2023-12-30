import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CartService } from './cart.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FavoriteService } from './favorite.service';
import { FormsModule } from '@angular/forms'; // Add this line to import FormsModule
import { PaymentmethodPage } from './paymentmethod/paymentmethod.page'; // Import your PaymentmethodPage

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule, 
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CartService,
    FavoriteService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}