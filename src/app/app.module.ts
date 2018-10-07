import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,  MatCardModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DogparkListComponent } from './dogpark/dogpark-list/dogpark-list.component';

import { MaterialModule } from './material.module';

import { FlexLayoutModule} from '@angular/flex-layout';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'dogpark', component: DogparkListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DogparkListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
