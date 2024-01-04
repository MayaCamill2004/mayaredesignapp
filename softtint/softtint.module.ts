// softtint.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SofttintPage } from './softtint.page';


@NgModule({
  declarations: [SofttintPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: SofttintPage }]),
  ],
})
export class SofttintPageModule {}
