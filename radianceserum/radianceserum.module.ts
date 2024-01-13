import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadianceserumPageRoutingModule } from './radianceserum-routing.module';

import { RadianceserumPage } from './radianceserum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadianceserumPageRoutingModule
  ],
  declarations: [RadianceserumPage]
})
export class RadianceserumPageModule {}
