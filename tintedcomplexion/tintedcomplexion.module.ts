import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TintedcomplexionPageRoutingModule } from './tintedcomplexion-routing.module';

import { TintedcomplexionPage } from './tintedcomplexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TintedcomplexionPageRoutingModule
  ],
  declarations: [TintedcomplexionPage]
})
export class TintedcomplexionPageModule {}
