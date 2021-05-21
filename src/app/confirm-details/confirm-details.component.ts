import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.css']
})
export class ConfirmDetailsComponent implements OnInit {

  choosecake: any = {};
  totalprice: any = 0;
  api = 'https://apifromashu.herokuapp.com/api/';

  constructor(private client: HttpClient, private router: Router, public cs: CommonserviceService) {
    this.showing();
    
  }
  
  showing() {
    this.client.post(this.api+'cakecart', {}).subscribe((res: any) => {
      console.log("response from cakescart", res)
      this.choosecake = [...res.data];
      this.choosecake.totalprice=(this.choosecake.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
      console.log(this.choosecake);
    }, (error) => {
      console.log("error from cakescart", error)
    }
    );
  }
  confirm() {
    this.cs.checkFlag = true;
    this.router.navigate(['checkout/address']);
  }


  ngOnInit(): void {
  }

}
