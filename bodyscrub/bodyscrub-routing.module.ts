import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyscrubPage } from './bodyscrub.page';

const routes: Routes = [
  {
    path: '',
    component: BodyscrubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyscrubPageRoutingModule {}
