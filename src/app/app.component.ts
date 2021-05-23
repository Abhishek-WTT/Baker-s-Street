import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';

  constructor(private http: HttpClient) {
    this.http.get('https://apifromashu.herokuapp.com/api/getuserdetails').subscribe((res: any) => {
      // console.log(res)
    }, (err: any) => {
      if (err.ok === false)
      {
        localStorage.clear();
        }
      console.log(err);
    }
    )}
  
}