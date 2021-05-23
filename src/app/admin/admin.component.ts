import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  choosecake : any = {};
  api = 'https://apifromashu.herokuapp.com/api/';

  constructor(private http:HttpClient, private route: Router) { 
    this.showing();
  }

  showing() {
    this.http.get(this.api+'allcakes').subscribe((res: any) => {
      console.log("response from cakescart", res)
      this.choosecake = [...res.data];
       console.log(this.choosecake);
    }, (error) => {
      console.log("error from cakescart", error)
    }
    );
  }
  editform(i:any) {
    this.route.navigate(['/admin/editform', i]);
  }

  ngOnInit(): void {
  }

}
