import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  ids: any;
  toggle: any = true;
  order: any = [];
  orderDetails: any = [];
  api = 'https://apifromashu.herokuapp.com/api/';
   
  constructor(private client: HttpClient, private route: Router, private activate: ActivatedRoute ) {
    
    this.client.post(this.api + 'cakeorders',{}).subscribe((res: any) => {
       console.log("response from cakescart", res)
      this.order = res.cakeorders;
      console.log(this.order);
     this.order.forEach((e: any) => {
       
const dt = new Date(e.orderdate)
        console.log(dt);
      e.orderdate=`${dt.getDate()}-${dt.getMonth()+1}-${dt.getFullYear()}`});
       
    }, (error) => {
      console.log("error from cakescart", error)
    }
    );
  }
  details(id: any) {
    this.toggle = false;
    document.querySelector(`#cake${id}`)?.classList.remove('hidden');
    console.log(id);
  }
  hide(id:any) {
    this.toggle = true;
    document.querySelector(`#cake${id}`)?.classList.add('hidden');
  }

  ngOnInit(): void {
  }

}
