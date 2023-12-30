import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaceCarePageRoutingModule } from './face-care-routing.module';

import { FaceCarePage } from './face-care.page';

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
