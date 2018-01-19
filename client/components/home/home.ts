import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {BazService} from '../../services/baz/baz';
import {PageConfig} from '../../services/routes/routes';
import {Page} from '../../services/routes/routes';
import {RoutesService} from '../../services/routes/routes';

/**
 * Component for the home page. This component is loaded via the router and so
 * does not include a selector.
 */
@Component({
  moduleId: module.id,
  templateUrl: './home.ng.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  /** The app name provides an example of retrieving data from a service. */
  appName: string;

  /** The currently selected root-level page. */
  currentPage: Page;

  /** The page configuration for the root-level pages. */
  rootPageConfig: PageConfig = RoutesService.ROOT_CONFIG;

  constructor(
      private readonly bazService: BazService,
      private readonly route: ActivatedRoute) {
    this.init()
  }

  /**
   * Initializes the component before data-bound properties have been set.
   */
  private init() {
    this.appName = this.bazService.getName();
  }

  /**
   * Initializes the component after data-bound properties have been set.
   */
  ngOnInit() {
    this.setCurrentPageData();
  }

  /**
   * Sets the current page data using the activated route's snapshot data. The
   * curently activated route always contains custom data, since the Home page
   * only accesses the top-level route (it is never loaded as part of any child
   * component routes). Accessesing the route data via the snapshot is
   * sufficient since the home page loads only once per route change. For an
   * Example of accessing updated route data on route changes using Observables,
   * see the Header component.
   */
  private setCurrentPageData() {
    this.currentPage = this.route.snapshot.data.page;
  }
}
