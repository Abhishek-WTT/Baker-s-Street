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
  searchValues : any;
  searchValue : any;

  constructor( private cs: CommonserviceService, private route: Router) { }

  ngDoCheck() {
    if (localStorage.email === 'abhishek.singh@walkingtree.tech') {
      this.adminflag = true;
    }
    this.email = localStorage.getItem("email");
    if (this.email) {
      this.flag = false;
    }else{
      this.flag = true;
    }
  }
  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    this.route.navigate(['/login'])
    this.flag = true;
    this.adminflag = false;
  };

  search() {
    this.searchValues = this.searchValue.trim();
    
    if (!this.searchValues) return;
    this.route.navigate(['/search'], { queryParams: { q: this.searchValues } });
  }

}
