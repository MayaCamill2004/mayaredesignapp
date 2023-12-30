
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TintedcarePageRoutingModule } from './tintedcare-routing.module';
import { TintedcarePage } from './tintedcare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TintedcarePageRoutingModule
  ],
  declarations: [TintedcarePage]
})
export class TintedcarePageModule {}
