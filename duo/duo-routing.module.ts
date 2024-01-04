import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuoPage } from './duo.page';

const routes: Routes = [
  {
    path: '',
    component: DuoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuoPageRoutingModule {}
