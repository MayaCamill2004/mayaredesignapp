import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnosticStepTwoPageRoutingModule } from './diagnostic-step-two-routing.module';

import { DiagnosticStepTwoPage } from './diagnostic-step-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnosticStepTwoPageRoutingModule
  ],
  declarations: [DiagnosticStepTwoPage]
})
export class DiagnosticStepTwoPageModule {}
