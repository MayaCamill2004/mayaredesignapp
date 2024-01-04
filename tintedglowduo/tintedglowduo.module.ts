import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TintedglowduoPageRoutingModule } from './tintedglowduo-routing.module';

import { TintedglowduoPage } from './tintedglowduo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TintedglowduoPageRoutingModule
  ],
  declarations: [TintedglowduoPage]
})
export class TintedglowduoPageModule {}
