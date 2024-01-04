import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TannedPage } from './tanned.page';

const routes: Routes = [
  {
    path: '',
    component: TannedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TannedPageRoutingModule {}
