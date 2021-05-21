import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeDetailsComponent } from './cake-details/cake-details.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchCakeComponent } from './search-cake/search-cake.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AddressComponent } from './address/address.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ConfirmDetailsComponent } from './confirm-details/confirm-details.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkoutform', component : CheckoutFormComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'cake/:id', component: CakeDetailsComponent },
  { path: 'search', component: SearchCakeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'order', component: OrderComponent },
  { path: 'checkout', component: CheckoutFormComponent, children:[{path: 'address', component:AddressComponent}, { path: 'placeOrder', component: PlaceOrderComponent}, {path: '', component: ConfirmDetailsComponent}] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
