import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
allCakes:any = [];
URL: any = "https://apifromashu.herokuapp.com/api/";
confirmFlag : any = false;
checkFlag : any = false;
orderdetails: any = {};
confirmDetails : any = {};

  getdata(){
  const apiUrl = "https://apifromashu.herokuapp.com/api/allcakes"
  this.http.get(apiUrl).subscribe((response:any)=>{this.allCakes = response.data}, (error)=>{console.log(error)})
}

  constructor(private http:HttpClient) {  }

  validateEmail(email: any) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
