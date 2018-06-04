import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import {LoginService} from './services/app/login.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './routing/routing.module';
import {AppService} from './services/app.service';
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [LoginService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
