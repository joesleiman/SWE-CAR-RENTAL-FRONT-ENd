import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './pages/customer/customer.component';
import {HomeComponent} from './pages/home/home.component';
import {ListCarsComponent} from './pages/list-cars/list-cars.component';
import {AddCarComponent} from './pages/add-car/add-car.component';
import {AddUserComponent} from './pages/add-user/add-user.component';
import {PaymentComponent} from './pages/payment/payment.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'customer', component: CustomerComponent },
  { path: 'list-cars', component: ListCarsComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
