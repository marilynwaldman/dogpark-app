import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,  MatCardModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/navbar/header/header.component';
import { SidenavListComponent } from './components/navbar/sidenav-list/sidenav-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DogparkListComponent } from './dogpark/dogpark-list/dogpark-list.component';

//import { DogparkListFooterComponent } from './dogpark/dogpark-list-footer/dogpark-list-footer.component';
//import { DogparkListHeaderComponent } from './dogpark/dogpark-list-header/dogpark-list-header.component';


import { DogparkDataService } from './services/dogpark-data.service';
import { ApiService } from './services/api.service';

import { MaterialModule } from './material.module';

import { FlexLayoutModule} from '@angular/flex-layout';
import { DogparkListItemComponent } from './dogpark/dogpark-list-item/dogpark-list-item.component';
import { DogparksComponent } from './dogpark/dogparks/dogparks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DogparkListComponent,
    HeaderComponent,
    SidenavListComponent,
    DogparkListItemComponent,
    DogparksComponent,
    // DogparkListFooterComponent,
    // DogparkListHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [DogparkDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
