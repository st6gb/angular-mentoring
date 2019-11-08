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
      filter((event: ChildActivationEnd) => event.snapshot.routeConfig !== null)
    ).subscribe(event => {
      console.log(this.activatedRoute.root);
      // console.log(event.snapshot.routeConfig);
      // console.log(event);
      }
    );
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      // .subscribe(() => console.log(this.activatedRoute.root));
    // this.activatedRoute.queryParamMap.subscribe(console.log);
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe((data) => console.log(data));
  }

  // private createBreadcrumbs(route: ActivatedRoute, url: string = '#', breadcrumbs: MenuItem[] = []): MenuItem[] {
  //   const children: ActivatedRoute[] = route.children;

  //   if (children.length === 0) {
  //     return breadcrumbs;
  //   }

  //   for (const child of children) {
  //     const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
  //     if (routeURL !== '') {
  //       url += `/${routeURL}`;
  //     }

  //     const label = child.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
  //     if (!isNullOrUndefined(label)) {
  //       breadcrumbs.push({label, url});
  //     }

  //     return this.createBreadcrumbs(child, url, breadcrumbs);
  //   }
  // }

}
