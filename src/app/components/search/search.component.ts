import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/internal/operators';
import { of } from 'rxjs/internal/observable/of';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() filteredCourses: EventEmitter<string> = new EventEmitter<string>();
  public searchValue = '';
  private search$: Subject<string> = new Subject<string>();
  constructor() { }

  ngOnInit() {
    this.search$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap((text: string) => {
        this.filteredCourses.emit(text);
      })
    ).subscribe();
  }


  public searchCourses() {
    this.search$.next(this.searchValue);
  }
}
