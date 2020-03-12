import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {SharedMaterialModule} from './shared-material.module';
import {LoginComponent} from './component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
