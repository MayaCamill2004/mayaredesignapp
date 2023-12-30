import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NightcarePage } from './nightcare.page';

const routes: Routes = [
  {
    path: '',
    component: NightcarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NightcarePageRoutingModule {}
