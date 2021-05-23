import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GaurdService {

  constructor(private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(route, state);
    if (state.url === '/login') {
      if (localStorage.email) {
        this.route.navigate(['/']);
        return false
      } else {
        return true;
      }
    }
    if (!localStorage.email) {
      this.route.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
