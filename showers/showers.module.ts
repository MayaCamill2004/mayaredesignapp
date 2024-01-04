import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowersPageRoutingModule } from './showers-routing.module';

import { ShowersPage } from './showers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowersPageRoutingModule
  ],
  declarations: [ShowersPage]
})
export class ShowersPageModule {}
