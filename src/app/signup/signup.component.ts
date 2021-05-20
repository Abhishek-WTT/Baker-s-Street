import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonserviceService } from '../commonservice.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user : any = {};

  constructor(private http:HttpClient , private cs: CommonserviceService) { }

  ngOnInit(): void {
  }
  signup(){
    if(this.cs.validateEmail(this.user.email)) {
      this.http.post("https://apifromashu.herokuapp.com/api/register", this.user).subscribe((response:any)=>{alert(response.message); console.log(response) }, (error)=>{console.log(error)})

    }
}
}
