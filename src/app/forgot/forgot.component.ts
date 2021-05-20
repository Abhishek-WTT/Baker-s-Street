import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonserviceService } from '../commonservice.service'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
email : any;

  constructor(private http:HttpClient , private cs: CommonserviceService) { }

  ngOnInit(): void {
  }

  getpassword(){
    if(this.cs.validateEmail(this.email)) {
      this.http.post("https://apifromashu.herokuapp.com/api/recoverpassword", {email: this.email}).subscribe((response:any)=>{alert(response.message); console.log(response) }, (error)=>{console.log(error)})
  }
}
}
