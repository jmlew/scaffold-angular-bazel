import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import {BazService} from '../../services/baz/baz';
import {Page, PageConfig, RouteLevel, RoutesService} from '../../services/routes/routes';

/**
 * Options for defining the menu style. This is used to provide exampes of two
 * types of navigation in the view.
 */
export enum MenuStyle {
  Tabs,
  Buttons,
}

/**
 * Component providing an example of a root-level page which includes a number
 * of secondary-level subcomponents. Navigation between these subcomponents is
 * included and the curent secondary-level page data is provided by the custom
 * router service. This component is loaded via the router and so does not
 * include a selector.
 */
@Component({
  moduleId: module.id,
  templateUrl: './foo.ng.html',
  styleUrls: ['./foo.css'],
})
export class Foo implements OnInit, OnDestroy {
  /** The currently selected secondary-level page. */
  currentSecondaryPage: Page;

  /** The page configuration for the Foo secondary-level pages. */
  secondaryPageConfig: PageConfig = RoutesService.FOO_CONFIG;

  /** The currently active secondary-level page subscription */
  activeSecondaryPageSubscription: Subscription;

  /** Export the menu stye enum for the view. */
  MenuStyle = MenuStyle;

  /** The currently selected menu stye. */
  currentMenuStyle: MenuStyle = MenuStyle.Tabs;

  /** The app name provides an example of retrieving data from a service. */
  appName: string;

  constructor(
      private readonly router: Router,
      private readonly routesService: RoutesService,
      private readonly activatedRoute: ActivatedRoute,
      private readonly bazService: BazService) {
    this.init();
  }

  /**
   * Initializes the component before data-bound properties have been set.
   * The app name is retrieved and the current secondary-level page data is set
   * up to update on route changes.
   */
  private init() {
    this.appName = this.bazService.getName();
    this.updateCurrentPageDataOnRouteChange();
  }

  /**
   * Initializes the component after data-bound properties have been set.
   */
  ngOnInit() {}

  /**
   * Unsubscribes from all Observables before the component is destroyed.
   */
  ngOnDestroy() {
    this.activeSecondaryPageSubscription.unsubscribe();
  }

  /**
   * Updates the current child secondary-level page data with the current
   * route's {@code data.page} which is defined as part of this component's
   * route definitions in components/foo/foo_routing_module.ts.
   */
  private updateCurrentPageDataOnRouteChange() {
    this.activeSecondaryPageSubscription =
        this.routesService.getRouteDataOnNavigationEnd(RouteLevel.Secondary)
            .subscribe((data: PageConfig) => {
              if (data.page) this.currentSecondaryPage = data.page;
            });
  }

  /**
   * Navigates to a given child component page. Note: Navigating to child
   * components from the parent can either be done by either providing an
   * absolute path, as defined in {@code page.path}, or by providing a relative
   * path which is defined as the route's name, as defined in {@code page.name}.
   * When nvigating to a relative path imperatively (in the component, as
   * opposed to declaratively in the view with the 'routerLink' directive)
   * requires supplying the {@code ActivatedRoute} for the router access to
   * access the component's place in the current route tree.
   */
  onNavToChildRoute(page: Page) {
    // Example using absolute path.
    // this.router.navigate([page.path]);

    // Example using relative path: relative to the ActivatedRoute.
    this.router.navigate([page.name], {relativeTo: this.activatedRoute});
  }
}
