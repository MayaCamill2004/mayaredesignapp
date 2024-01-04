import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShampoosPage } from './shampoos.page';

const routes: Routes = [
  {
    path: '',
    component: ShampoosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShampoosPageRoutingModule {}
