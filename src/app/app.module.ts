import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,  MatCardModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/navbar/header/header.component';
import { SidenavListComponent } from './components/navbar/sidenav-list/sidenav-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DogparkListComponent } from './dogpark/dogpark-list/dogpark-list.component';

import { MaterialModule } from './material.module';

import { FlexLayoutModule} from '@angular/flex-layout';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DogparkListComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
