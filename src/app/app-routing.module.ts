import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogparkListComponent } from './dogpark/dogpark-list/dogpark-list.component';
import { DogparksComponent} from './dogpark/dogparks/dogparks.component';
import { DogparksResolver } from './dogparks.resolver';

const routes: Routes = [

  { path: 'dogpark',
    component: DogparksComponent,
    resolve: {
      dogparks: DogparksResolver
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    DogparksResolver
  ]
})
export class AppRoutingModule {}
