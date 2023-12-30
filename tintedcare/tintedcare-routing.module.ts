import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TintedcarePage } from './tintedcare.page';

const routes: Routes = [
  {
    path: '',
    component: TintedcarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TintedcarePageRoutingModule {}
