import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByPage } from './by.page';

const routes: Routes = [
  {
    path: '',
    component: ByPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByPageRoutingModule {}
