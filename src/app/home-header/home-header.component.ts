import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  headerOne = false;
  headerTwo = false;
  headerThree = false;
  showHeaderOne(){
    this.headerOne = !this.headerOne;
  }
  showHeaderTwo(){
    this.headerTwo = !this.headerTwo;
  }
  showHeaderThree(){
    this.headerThree = !this.headerThree;
  }

  constructor() { }

  ngOnInit() {
  }

}
