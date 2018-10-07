import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogparkListComponent } from './dogpark/dogpark-list/dogpark-list.component';

const routes: Routes = [

  { path: 'dogpark', component: DogparkListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
