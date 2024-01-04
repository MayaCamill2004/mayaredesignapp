import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowersPage } from './showers.page';

const routes: Routes = [
  {
    path: '',
    component: ShowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowersPageRoutingModule {}
