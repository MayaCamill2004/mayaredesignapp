import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnosticStepThreePageRoutingModule } from './diagnostic-step-three-routing.module';

import { DiagnosticStepThreePage } from './diagnostic-step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnosticStepThreePageRoutingModule
  ],
  declarations: [DiagnosticStepThreePage]
})
export class DiagnosticStepThreePageModule {}
