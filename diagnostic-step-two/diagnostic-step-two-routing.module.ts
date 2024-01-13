import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosticStepTwoPage } from './diagnostic-step-two.page';

const routes: Routes = [
  {
    path: '',
    component: DiagnosticStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnosticStepTwoPageRoutingModule {}
