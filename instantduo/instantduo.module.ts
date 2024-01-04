import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstantduoPageRoutingModule } from './instantduo-routing.module';

import { InstantduoPage } from './instantduo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstantduoPageRoutingModule
  ],
  declarations: [InstantduoPage]
})
export class InstantduoPageModule {}
