import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TientsPage } from './tients.page';

const routes: Routes = [
  {
    path: '',
    component: TientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TientsPageRoutingModule {}
