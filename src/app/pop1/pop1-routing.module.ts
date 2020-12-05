import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop1Page } from './pop1.page';

const routes: Routes = [
  {
    path: '',
    component: Pop1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop1PageRoutingModule {}
