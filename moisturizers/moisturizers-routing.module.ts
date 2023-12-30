import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoisturizersPage } from './moisturizers.page';

const routes: Routes = [
  {
    path: '',
    component: MoisturizersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoisturizersPageRoutingModule {}
