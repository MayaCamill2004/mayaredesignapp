import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaceCarePage } from './face-care.page';

const routes: Routes = [
  {
    path: '',
    component: FaceCarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaceCarePageRoutingModule {}
