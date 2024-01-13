import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SofttintPageRoutingModule } from './softtint-routing.module';

import { SofttintPage } from './softtint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SofttintPageRoutingModule
  ],
  declarations: [SofttintPage]
})
export class SofttintPageModule {}
