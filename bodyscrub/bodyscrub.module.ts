import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodyscrubPageRoutingModule } from './bodyscrub-routing.module';

import { BodyscrubPage } from './bodyscrub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodyscrubPageRoutingModule
  ],
  declarations: [BodyscrubPage]
})
export class BodyscrubPageModule {}
