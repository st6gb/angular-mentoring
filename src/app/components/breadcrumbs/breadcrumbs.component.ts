import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ChildActivationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { filter, tap, map, take } from 'rxjs/internal/operators';


interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      const root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string= '', breadcrumbs: IBreadcrumb[]=[]): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      url += `/${routeURL}`;

      const breadcrumb: IBreadcrumb = {
        label: this.setLabelBreadCrumbs(child.snapshot.params.id, child.snapshot.data[ROUTE_DATA_BREADCRUMB]),
        params: child.snapshot.params,
        url
      };
      breadcrumbs.push(breadcrumb);

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }
  private setLabelBreadCrumbs(params: string, data: string): string {
    if (params) {
      return `${params} Video Course `;
    }
    return data;
  }

}
