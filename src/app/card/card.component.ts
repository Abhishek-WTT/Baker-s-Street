import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
allCakes: any = [];
 
  constructor(public cs: CommonserviceService, private route : Router ) { cs.getdata()}

  ngOnInit(): void {
  }
  cakeDetails(i:any){
    this.route.navigate(['/cake', this.cs.allCakes[i].cakeid]);
    console.log(this.cs.allCakes[i].cakeid);
  }
}
