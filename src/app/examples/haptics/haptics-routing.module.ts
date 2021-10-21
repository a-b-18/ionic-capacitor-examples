import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HapticsPage } from './haptics.page';

const routes: Routes = [
  {
    path: '',
    component: HapticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HapticsPageRoutingModule {}
