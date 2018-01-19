import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import {BazService} from '../../services/baz/baz';
import {Page, PageConfig, RouteLevel, RoutesService} from '../../services/routes/routes';

/**
 * Component for the header which remains visible at all times. The header
 * displays the current root-level page info and provides navigation for
 * secondary-level child routes.
 */
@Component({
  moduleId: module.id,
  selector: 'jl-header',
  templateUrl: './header.ng.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit, OnDestroy {
  /** The app name provides an example of retrieving data from a service. */
  appName: string;

  /** The currently selected root-level page. */
  currentPage: Page;

  /** The currently selected secondary-level page. */
  currentSecondaryPage: Page;

  /** The page configuration for the root-level pages. */
  rootPageConfig: PageConfig = RoutesService.ROOT_CONFIG;

  /** The page configuration for the Foo secondary-level pages. */
  secondaryPageConfig: PageConfig = RoutesService.FOO_CONFIG;

  /** The currently active root-level page subscription. */
  activePageSubscription: Subscription;

  /** The currently active secondary-level page subscription. */
  activeSecondaryPageSubscription: Subscription;

  /** Event emitter to update the parent with clicks on the menu button. */
  @Output() onMenuClick = new EventEmitter();

  constructor(
      private readonly routesService: RoutesService,
      private readonly bazService: BazService) {
    this.init();
  }

  /**
   * Initializes the component before data-bound properties have been set.
   * The app name is retrieved and the current root-level and secondary-level
   * pages data is set up to update on route changes.
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
    this.activePageSubscription.unsubscribe();
    this.activeSecondaryPageSubscription.unsubscribe();
  }

  /**
   * Updates the current root-level and secondary-level page data in response
   * to route changes by retrieving the page configuration {@code data.page}.
   * These page configurations are provided by the route's custom data which is
   * defined in the components' routing modules.
   */
  private updateCurrentPageDataOnRouteChange() {
    this.activePageSubscription =
        this.routesService.getRouteDataOnNavigationEnd(RouteLevel.Root)
            .subscribe((data: PageConfig) => {
              if (data.page) this.currentPage = data.page;
            });

    this.activeSecondaryPageSubscription =
        this.routesService.getRouteDataOnNavigationEnd(RouteLevel.Secondary)
            .subscribe((data: PageConfig) => {
              if (data.page) this.currentSecondaryPage = data.page;
            });
  }

  /**
   * Emits an event to the parent component in response to the click event on
   * the menu button.
   */
  onMenuBtnClick() {
    this.onMenuClick.emit();
  }
}
