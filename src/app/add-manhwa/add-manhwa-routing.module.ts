import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddManhwaPage } from './add-manhwa.page';

const routes: Routes = [
  {
    path: '',
    component: AddManhwaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddManhwaPageRoutingModule {}
