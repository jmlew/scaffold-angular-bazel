import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import {Observable, ObservableInput} from 'rxjs/Observable';

/**
 * Page data providing routing information and page details for custom data
 * defined in a component's routing moudules.
 */
export interface Page {
  name: string;
  label?: string;
  path: string;
}

/**
 * Configuration for each page.
 */
export interface PageConfig { [page: string]: Page; }

/**
 * Routing levels which define the depth from the top-level route to a route
 * which contains custom data defining page configs. Root level components are
 * the first child of the root component and whose routes are defined on the
 * root component, and secondary level is the first child of the root level
 * component.
 */
export enum RouteLevel {
  Root,
  Secondary
}

/**
 * Service which provides access to activated routes and their custom data on
 * the completion of each route navigation life-cycle. Route configurations
 * which include custom data (such as page details and route info) can allow
 * this data to be accessed throughout the app by componets who rely on being
 * updated as to currently active components as a means of sharing state across
 * the app.
 */
@Injectable()
export class RoutesService {
  constructor(
      private readonly activatedRoute: ActivatedRoute,
      private readonly router: Router, private readonly titleService: Title) {
    this.init();
  }

  private init() {
    this.updateCurrentPageDataOnRouteChange();
  }

  /**
   * Retrieves the currently activated page data from the root-level route upon
   * completion of the nagivation life-cycle and updates the page title.
   */
  private updateCurrentPageDataOnRouteChange() {
    this.getRouteDataOnNavigationEnd(RouteLevel.Root)
        .subscribe((data: PageConfig) => {
          if (data.page && data.page.label) {
            this.titleService.setTitle(data.page.label);
          }
        });
  }

  /**
   * Returns an observable which provides the currently activated route at the
   * end of each navigation life-cycle.
   */
  getActiveRouteOnNavigationEnd(): Observable<ActivatedRoute> {
    return this.router.events
        .filter((event) => event instanceof NavigationEnd)
        // Return the currently activated route.
        .map(() => this.activatedRoute);
  }

  /**
   * Returns an observable which provides the custom route data for the App's
   * root-level or secondary-level child routes which is added to the route
   * configurations which are defined in the root level routing module
   * (components/app_routing_module.ts) and secondary level modules
   * (components/foo/foo_routing_module.ts, etc.).
   */
  getRouteDataOnNavigationEnd(routeLevel: RouteLevel): Observable<{}> {
    return this.getActiveRouteOnNavigationEnd()
        .map((route) => {
          // Retrieve the child route based on the provided route level.
          switch (routeLevel) {
            case RouteLevel.Root:
              if (route.firstChild) return route.firstChild;
              break;
            case RouteLevel.Secondary:
              if (route.firstChild && route.firstChild.firstChild) {
                return route.firstChild.firstChild;
              }
              break;
            default:
              break;
          }
          return route;
        })
        .filter((route) => route.outlet === 'primary')  // Avoid named routes.
        .mergeMap((route) => route.data)
        .catch((error) => error);
  }

  /**
   * Configuration for the root-level page data.
   */
  static ROOT_CONFIG = {
    home: {
      name: 'home',
      path: '/home',
      label: 'Home Page',
    },
    foo: {
      name: 'foo',
      path: '/foo',
      label: 'Foo Page',
    },
    bar: {
      name: 'bar',
      path: '/bar',
      label: 'Bar Page',
    },
  };

  /**
   * Configuration for the secondary-level Foo child component's page data.
   */
  static FOO_CONFIG = {
    fooone: {
      name: 'fooone',
      path: '/foo/fooone',
      label: 'Foo Page One',
    },
    footwo: {
      name: 'footwo',
      path: '/foo/footwo',
      label: 'Foo Page Two',
    },
  };
}
