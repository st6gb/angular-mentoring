import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchValue: string ='';
  public name: string = '';
  constructor() { }

  ngOnInit() {
  }

  public searchCourses() {
    console.log(this.searchValue);
  }
}
