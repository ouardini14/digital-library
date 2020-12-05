import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUPPage } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignUPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPageRoutingModule {}
