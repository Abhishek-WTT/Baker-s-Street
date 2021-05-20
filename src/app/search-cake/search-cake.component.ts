import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-cake',
  templateUrl: './search-cake.component.html',
  styleUrls: ['./search-cake.component.css']
})
export class SearchCakeComponent implements OnInit {
cakedata : any;
cakesort : any = [];
price : any = {}

  constructor(private client:HttpClient, private route: ActivatedRoute) { 
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

   sort(){
     if(!this.price.min && !this.price.max){
       alert (`Please enter min or max price`)    
       return ;
      }
      this.cakesort = this.cakedata.filter((a:any)=> (this.price.min ? a.price >= this.price.min : true) && (this.price.max ? a.price <= this.price.max : true) )
   }

  ngOnInit(): void {
  }

}
