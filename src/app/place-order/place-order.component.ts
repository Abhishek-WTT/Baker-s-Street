import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  api = 'https://apifromashu.herokuapp.com/api/';

  constructor(public cs: CommonserviceService, private route:Router, private client: HttpClient ){}

  ngOnInit(): void {
  }
  finalize() {
    this.client.post(this.api + 'addcakeorder',this.cs.orderdetails).subscribe((res: any) => {
      console.log("response from addcakeOrder", res);
       this.cs.confirmDetails = { ...this.cs.orderdetails,...this.cs.orderdetails.cakes };
       console.log(this.cs.confirmDetails);
    }, (error) => {
        console.log("error from upload api",error)
        }
      );
    this.route.navigate(['/order']);
    
  
}

}
