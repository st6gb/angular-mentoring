import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() filteredCourses: EventEmitter<string> = new EventEmitter<string>();
  public searchValue = '';
  public name = '';
  constructor() { }

  ngOnInit() {
  }

  public searchCourses() {
    this.filteredCourses.emit(this.searchValue);
  }
}
