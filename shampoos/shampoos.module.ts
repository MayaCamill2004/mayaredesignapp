import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShampoosPageRoutingModule } from './shampoos-routing.module';

import { ShampoosPage } from './shampoos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShampoosPageRoutingModule
  ],
  declarations: [ShampoosPage]
})
export class ShampoosPageModule {}
