import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCakeComponent } from './search-cake.component';

describe('SearchCakeComponent', () => {
  let component: SearchCakeComponent;
  let fixture: ComponentFixture<SearchCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
