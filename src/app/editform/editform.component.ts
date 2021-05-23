import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  ids: any;
  cakeobj: any;
  imgurl: any;
  file: any;
  ingredients: any = {};
  div: any;
 
  constructor(private routes: ActivatedRoute, private client: HttpClient) {
    this.ids = this.routes.snapshot.params['id'];
    console.log(this.ids);
   var apiurl = 'https://apifromashu.herokuapp.com/api/cake/';
  this.client.get(apiurl+this.ids).subscribe(
    (response: any) => {
      console.log('response from signup api', response);
      this.cakeobj = response.data;
      this.ingredients = { ...this.cakeobj.ingredients };
      console.log(this.ingredients);
      console.log(this.cakeobj);
    },
    (error) => {
      console.log('Error from signup api', error);
    }
  );
  }

  ngOnInit(): void {
  }
  upload(event: any) {
    if (event.target.files.length === 0) {
      console.log("No file selected!");
      return
   }
  let file: File = event.target.files[0];
  var formData = new FormData();
  formData.append('file', file);
    console.log(formData);
  
  // this.files.inProgress = true;
  var api = 'https://apifromashu.herokuapp.com/api/upload';
  this.client.post(api,formData).subscribe((res: any) => {
    console.log("response from upload api", res)
    this.cakeobj.image = res.imageUrl;
    console.log(this.cakeobj.image);
  }, (error) => {
    console.log("error from upload api",error)
      }
    );
  }
  ingdDel(i: any) {
    console.log(i);
    console.log(this.ingredients);
    this.cakeobj.ingredients.splice(i, 1);
    this.ingredients = { ...this.cakeobj.ingredients };
  }
  ingAdd() {
    this.cakeobj.ingredients = Object.values(this.ingredients);
    this.cakeobj.ingredients.push('');
    this.ingredients = { ...this.cakeobj.ingredients };
  }
  save() {
    this.cakeobj.ingredients = Object.values(this.ingredients);
    console.log(this.cakeobj);
    
  }
  
}
