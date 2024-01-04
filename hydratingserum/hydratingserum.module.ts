import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HydratingserumPageRoutingModule } from './hydratingserum-routing.module';

import { HydratingserumPage } from './hydratingserum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HydratingserumPageRoutingModule
  ],
  declarations: [HydratingserumPage]
})
export class HydratingserumPageModule {}
