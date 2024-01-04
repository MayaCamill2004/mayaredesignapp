import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuoPageRoutingModule } from './duo-routing.module';

import { DuoPage } from './duo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuoPageRoutingModule
  ],
  declarations: [DuoPage]
})
export class DuoPageModule {}
