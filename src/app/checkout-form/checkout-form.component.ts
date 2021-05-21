import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {


  constructor(private route: Router, public cs: CommonserviceService) {
    
  }

 ngOnInit(): void {
 }
 summary() {
   this.route.navigate(['/checkout'])
    
 }
 confirm() {
   this.route.navigate(['checkout/confirm'])
 }
 address() {
   this.route.navigate(['checkout/address']);
   }
 orderplaced() {
   this.route.navigate(['/order']);
  
 }

}

