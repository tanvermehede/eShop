import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVerticalNavbarComponent } from './home-vertical-navbar.component';

describe('HomeVerticalNavbarComponent', () => {
  let component: HomeVerticalNavbarComponent;
  let fixture: ComponentFixture<HomeVerticalNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVerticalNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVerticalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
