import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TientsPageRoutingModule } from './tients-routing.module';

import { TientsPage } from './tients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TientsPageRoutingModule
  ],
  declarations: [TientsPage]
})
export class TientsPageModule {}
