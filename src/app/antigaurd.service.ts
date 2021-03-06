import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable <boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AntigaurdService implements CanDeactivate <CanComponentDeactivate> {

  constructor() { }
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
  
}
