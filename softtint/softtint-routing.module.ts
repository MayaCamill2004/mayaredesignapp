import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SofttintPage } from './softtint.page';

const routes: Routes = [
  {
    path: '',
    component: SofttintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SofttintPageRoutingModule {}
