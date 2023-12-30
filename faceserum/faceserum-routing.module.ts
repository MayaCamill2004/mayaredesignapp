import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaceserumPage } from './faceserum.page';

const routes: Routes = [
  {
    path: '',
    component: FaceserumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaceserumPageRoutingModule {}
