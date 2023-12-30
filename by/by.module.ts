import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByPageRoutingModule } from './by-routing.module';

import { ByPage } from './by.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByPageRoutingModule
  ],
  declarations: [ByPage]
})
export class ByPageModule {}
