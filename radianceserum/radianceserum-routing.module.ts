import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadianceserumPage } from './radianceserum.page';

const routes: Routes = [
  {
    path: '',
    component: RadianceserumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadianceserumPageRoutingModule {}
