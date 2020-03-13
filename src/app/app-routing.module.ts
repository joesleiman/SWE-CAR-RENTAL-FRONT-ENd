import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './pages/customer/customer.component';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'customer', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
