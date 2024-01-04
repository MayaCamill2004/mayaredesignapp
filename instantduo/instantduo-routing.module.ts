import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstantduoPage } from './instantduo.page';

const routes: Routes = [
  {
    path: '',
    component: InstantduoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstantduoPageRoutingModule {}
