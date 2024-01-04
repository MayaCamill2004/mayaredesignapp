import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedsignsofAgeingPageRoutingModule } from './advancedsignsof-ageing-routing.module';

import { AdvancedsignsofAgeingPage } from './advancedsignsof-ageing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancedsignsofAgeingPageRoutingModule
  ],
  declarations: [AdvancedsignsofAgeingPage]
})
export class AdvancedsignsofAgeingPageModule {}
