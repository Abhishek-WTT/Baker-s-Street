import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent implements OnInit {

  ids: any;
  cakeobj: any;
  message: any
  cake: any = {};
  file: any;
  imgurl: any;

    constructor(public cs: CommonserviceService, private routes: ActivatedRoute, private client:HttpClient, private router: Router) { 
     
        this.ids = +this.routes.snapshot.params['id'];
        console.log(this.ids);
        var apiurl = 'https://apifromashu.herokuapp.com/api/cake/';
        this.client.get(apiurl+this.ids).subscribe(
          (response: any) => {
            console.log('response from signup api', response);
            this.cakeobj = response.data;
            console.log(this.cakeobj)
            this.cake = { name: this.cakeobj.name, cakeid: this.cakeobj.cakeid, image: this.cakeobj.image, price: this.cakeobj.price, weight: this.cakeobj.weight }
          },
          (error) => {
            console.log('Error from signup api', error);
          }
        );    
    }

  ngOnInit(): void {
  }
 add(){
  var api = 'https://apifromashu.herokuapp.com/api/addcaketocart';
  this.client.post(api, this.cake).subscribe((response: any) => {
    console.log("add cake to cart response",response);

    if(response.message === "Added to cart"){
      alert ('Added to cart');
      this.router.navigate(['/cart']);
    }
    
  }, (error) => {
    
    console.log("add cake to cart error",error)
  })


  if (!localStorage.getItem("email")) {
    // this.toast.warning("Please Login First", "Warning");
    alert("Please Login First");
    setTimeout(() => {
      this.router.navigate(['/login']);  
    },5000)
  }
 };
}
