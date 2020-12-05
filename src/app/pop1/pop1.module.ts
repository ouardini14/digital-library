import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop1PageRoutingModule } from './pop1-routing.module';

import { Pop1Page } from './pop1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop1PageRoutingModule
  ],
  declarations: [Pop1Page]
})
export class Pop1PageModule {}
