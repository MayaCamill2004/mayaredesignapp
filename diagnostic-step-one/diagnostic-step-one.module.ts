import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnosticStepOnePageRoutingModule } from './diagnostic-step-one-routing.module';

import { DiagnosticStepOnePage } from './diagnostic-step-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnosticStepOnePageRoutingModule
  ],
  declarations: [DiagnosticStepOnePage]
})
export class DiagnosticStepOnePageModule {}
