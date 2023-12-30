import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoisturizersPageRoutingModule } from './moisturizers-routing.module';

import { MoisturizersPage } from './moisturizers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoisturizersPageRoutingModule
  ],
  declarations: [MoisturizersPage]
})
export class MoisturizersPageModule {}
