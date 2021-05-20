import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { SearchDirective } from './search.directive';
import { SearchCakeComponent } from './search-cake/search-cake.component';
import { CakeDetailsComponent } from './cake-details/cake-details.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ConfirmDetailsComponent } from './confirm-details/confirm-details.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavBarComponent,
    CarouselComponent,
    ForgotComponent,
    AddUserComponent,
    CheckoutFormComponent,
    HomeComponent,
    CardComponent,
    SearchDirective,
    SearchCakeComponent,
    CakeDetailsComponent,
    CartComponent,
    AddressComponent,
    PlaceOrderComponent,
    ConfirmDetailsComponent,
    AdminComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService ,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
