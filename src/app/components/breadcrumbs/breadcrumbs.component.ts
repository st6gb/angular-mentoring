import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ChildActivationEnd } from '@angular/router';
import { filter, tap, map, take } from 'rxjs/internal/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof ChildActivationEnd),
    ).subscribe(console.log)
    // this.activatedRoute.queryParamMap.subscribe(console.log);
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe((data) => console.log(data));
  }

}
