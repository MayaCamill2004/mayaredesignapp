import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosticStepOnePage } from './diagnostic-step-one.page';

const routes: Routes = [
  {
    path: '',
    component: DiagnosticStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnosticStepOnePageRoutingModule {}
