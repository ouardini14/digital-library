import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignINPage } from './sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: SignINPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInPageRoutingModule {}
