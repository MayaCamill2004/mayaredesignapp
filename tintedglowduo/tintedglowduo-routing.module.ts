import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TintedglowduoPage } from './tintedglowduo.page';

const routes: Routes = [
  {
    path: '',
    component: TintedglowduoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TintedglowduoPageRoutingModule {}
