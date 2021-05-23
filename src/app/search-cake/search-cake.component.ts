import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-search-cake',
  templateUrl: './search-cake.component.html',
  styleUrls: ['./search-cake.component.css']
})
export class SearchCakeComponent implements OnInit {
cakedata : any;
cakesort : any = [];
price : any = {}

  constructor(private client:HttpClient, private route: ActivatedRoute, private router:Router , public cs: CommonserviceService) { 
    var url = 'https://apifromashu.herokuapp.com/api/searchcakes?q=';
    this.route.queryParams.subscribe((e: any) => {
      if (e.q) {
        console.log(url + e.q);
            this.client.get(url+e.q).subscribe(
              (response: any) => {
                console.log('response from signup api', response);
                this.cakedata = response.data;
                this.cakesort = [...this.cakedata];
                if (!this.cakedata.length) {
                  alert("there is no such cake")
                }
                
                console.log(this.cakedata);
               },
              (error) => {
                console.log('Error from signup api', error);
              }
            );
      }
    }
    );
  }

   filter(){
     if(!this.price.min && !this.price.max){
       alert (`Please enter min or max price`)    
       return ;
      }
  //     this.cakesort = this.cakedata.filter((a:any)=> (this.price.min ? a.price >= this.price.min : true) && (this.price.max ? a.price <= this.price.max : true) )
  //  }
   if(this.price.min>this.price.max) 
   {
    alert ('Searching a wrong way');
    this.cakesort = this.cakedata;
    console.log(this.cakesort);
   }else if (this.price.min || this.price.max)  {
    this.cakesort = this.cakedata.filter(
      (fil: any) => 
        (this.price.min ? fil.price >= this.price.min : true) &&
          (this.price.max ? fil.price <= this.price.max : true)
    );
    console.log(this.cakesort);
  }
   }
  ngOnInit(): void {
  }

  cakeDetails(i:any){
    this.router.navigate(['/cake', this.cakesort[i].cakeid]);
    console.log(this.cakesort[i].cakeid);
  }
}