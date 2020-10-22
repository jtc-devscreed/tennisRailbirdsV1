import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinningPage } from './winning.page';

const routes: Routes = [
  {
    path: '',
    component: WinningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinningPageRoutingModule {}
