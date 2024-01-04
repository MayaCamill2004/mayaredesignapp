import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaceCarePageRoutingModule } from './facecare-routing.module';

import { FaceCarePage } from './facecare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaceCarePageRoutingModule
  ],
  declarations: [FaceCarePage]
})
export class FaceCarePageModule {}
