import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from './../commonservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = {};
  message:any;

  constructor(private route: Router, private cs: CommonserviceService , private http:HttpClient, private routes:ActivatedRoute) {this.user.email = this.routes.snapshot.params['email']; }

  ngOnInit(): void {
  }
  login() {
    if (!this.user.email || !this.user.password)
    alert('Please fill all the field');
  var apiurl = 'https://apifromashu.herokuapp.com/api/login';
  this.http.post(apiurl, this.user).subscribe(
    (response: any) => {
      console.log('response from signup api', response);
      this.message = response.message;
      
     
      if (this.message !== 'Invalid Credentials') {
        // this.toast.success(response.message, 'login successful');
       
        this.message = '';
        localStorage.setItem('email', this.user.email);
        localStorage.setItem('password', this.user.password);
         localStorage.setItem('token', response.token);

        this.route.navigate(['/']);
      } else {
        return;
      }
    },
    (error) => {
      console.log('Error from signup api', error);
    }
  );

  }

  validateLogin () {
    if(this.cs.validateEmail(this.user.email)) {
      this.route.navigate(['/'])
    }

  }

}