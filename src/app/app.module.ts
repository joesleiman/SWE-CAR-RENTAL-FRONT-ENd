import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {SharedMaterialModule} from './shared-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCarsComponent } from './pages/list-cars/list-cars.component';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { PaymentComponent } from './pages/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DatePickerComponent,
    CarCardComponent,
    CustomerComponent,
    HomeComponent,
    ListCarsComponent,
    AddCarComponent,
    AddUserComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
