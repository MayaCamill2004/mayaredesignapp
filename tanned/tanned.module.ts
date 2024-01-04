import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TannedPageRoutingModule } from './tanned-routing.module';

import { TannedPage } from './tanned.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TannedPageRoutingModule
  ],
  declarations: [TannedPage]
})
export class TannedPageModule {}
