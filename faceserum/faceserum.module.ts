import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaceserumPageRoutingModule } from './faceserum-routing.module';

import { FaceserumPage } from './faceserum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaceserumPageRoutingModule
  ],
  declarations: [FaceserumPage]
})
export class FaceserumPageModule {}
