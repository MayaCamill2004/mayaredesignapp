import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NightcarePageRoutingModule } from './nightcare-routing.module';

import { NightcarePage } from './nightcare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NightcarePageRoutingModule
  ],
  declarations: [NightcarePage]
})
export class NightcarePageModule {}
