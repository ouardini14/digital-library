import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemShowPageRoutingModule } from './item-show-routing.module';

import { ItemShowPage } from './item-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemShowPageRoutingModule
  ],
  declarations: [ItemShowPage]
})
export class ItemShowPageModule {}
