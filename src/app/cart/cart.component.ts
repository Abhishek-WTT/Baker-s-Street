import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem : any = [];

  constructor(private cs: CommonserviceService, private http: HttpClient) { 
    this.cartItems()
  }

    cartItems() {
      let apiUrl = this.cs.URL+"cakecart";
      this.http.post(apiUrl, {}).subscribe(
        (response: any) => {
          this.cartItem = response.data;
          console.log(response);
          // this.showOverlay = false;
        },
        (error) => {
          console.log("this is response" + error);
        }
      );
      }
      removeCake(i: any) {
        // this.showOverlay = true;
        let apiUrl = this.cs.URL+"removecakefromcart";
        this.http.post(apiUrl, { cakeid: this.cartItem[i].cakeid }).subscribe(
          (response: any) => {
            this.cartItems();
            // this.showOverlay = false;
          },
          (error) => {
            console.log("this is response" + error);
          }
        );
      }

  ngOnInit(): void {
  }

}
