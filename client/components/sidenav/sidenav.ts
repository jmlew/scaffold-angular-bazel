import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

import {Page, PageConfig, RoutesService} from '../../services/routes/routes';

/**
 * Navigation component which provides top-level route navigation from within
 * the md-sidenav component.
 */
@Component({
  moduleId: module.id,
  selector: 'jl-sidenav',
  templateUrl: './sidenav.ng.html',
  styleUrls: ['./sidenav.css'],
})
export class Sidenav {
  rootPageConfig: PageConfig = RoutesService.ROOT_CONFIG;
  @Output() onItemClick = new EventEmitter();

  constructor(private readonly router: Router) {
    this.init();
  }

  private init() {}

  /**
   * Nagivates to a given page's route path. The route path is an absolute path
   * which is defined on the given page's config in the RoutesService.
   */
  onNavToRoute(page: Page) {
    this.router.navigate([page.path]);
    this.onItemClick.emit();
  }
}
