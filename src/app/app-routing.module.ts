import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';

const routes: Routes = [
  { path:"paymentsuccess", component:PaymentsuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
