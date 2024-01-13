import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnosticResultsPageRoutingModule } from './diagnostic-results-routing.module';

import { DiagnosticResultsPage } from './diagnostic-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnosticResultsPageRoutingModule
  ],
  declarations: [DiagnosticResultsPage]
})
export class DiagnosticResultsPageModule {}
