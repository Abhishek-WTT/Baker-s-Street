import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeDetailsComponent } from './cake-details/cake-details.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkoutform', component : CheckoutFormComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'cake/:id', component: CakeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
