import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScalpPageRoutingModule } from './scalp-routing.module';

import { ScalpPage } from './scalp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScalpPageRoutingModule
  ],
  declarations: [ScalpPage]
})
export class ScalpPageModule {}
