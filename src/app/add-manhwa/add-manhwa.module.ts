import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddManhwaPageRoutingModule } from './add-manhwa-routing.module';

import { AddManhwaPage } from './add-manhwa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddManhwaPageRoutingModule
  ],
  declarations: [AddManhwaPage]
})
export class AddManhwaPageModule {}
