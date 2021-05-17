import { Directive, Input } from '@angular/core';
import { CommonserviceService } from './commonservice.service';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
@Input() searchKey: any;
  constructor(private cs:CommonserviceService) { }
ngOnChanges(changes : any) {if (this.searchKey) {
  this.cs.allCakes = this.cs.allCakes.filter((e: any) =>
    e.name.toLowerCase().includes(this.searchKey.toLowerCase())
  );
} else {
  this.cs.allCakes = this.cs.allCakes;
}
} }

