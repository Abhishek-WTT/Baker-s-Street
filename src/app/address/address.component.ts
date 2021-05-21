import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  choosecake: any;
  message: any;
  api = 'https://apifromashu.herokuapp.com/api/';

  constructor(private client: HttpClient, private route: Router, public cs: CommonserviceService ) {
    this.client.post(this.api + 'cakecart', {}).subscribe((res: any) => {
      console.log("response from cakescart", res)
      this.cs.orderdetails.cakes = [...res.data];
      this.cs.orderdetails.price=(this.cs.orderdetails.cakes.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
    }, (error) => {
      console.log("error from cakescart", error)
    }
    );
  }
  placeorder() {
    //console.log(this.userdetails.cakedetail.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
       console.log(this.cs.orderdetails);
      //  console.log(this.totalprice);
      //this.userdetails = '';
      console.log(this.cs.orderdetails);
      this.route.navigate(['checkout/placeOrder']);
    
    }
      ngOnInit(): void {
  }

}
