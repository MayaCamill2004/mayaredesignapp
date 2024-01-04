import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedsignsofAgeingPage } from './advancedsignsof-ageing.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedsignsofAgeingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedsignsofAgeingPageRoutingModule {}
