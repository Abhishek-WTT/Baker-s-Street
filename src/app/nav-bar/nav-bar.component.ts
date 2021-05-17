import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchkey:any = undefined ;
  adminflag : any = false;
  email : any ;
  flag : any = true;
  search() {
    if(this.searchkey) 
    this.route.navigate(['/navsearch'], {queryParams:{cakes:this.searchkey}})
  }

  constructor( private cs: CommonserviceService, private route: Router) { }

  ngDoCheck() {
    if (localStorage.email === 'abhishek.singh@walkingtree.tech') {
      this.adminflag = true;
    }
    this.email = localStorage.getItem("email");
    if (this.email) {
      this.flag = false;
    }
  }
  ngOnInit(): void {
  }

}
