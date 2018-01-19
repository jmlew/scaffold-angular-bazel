import {Component} from '@angular/core';

import {PageConfig, RoutesService} from '../../services/routes/routes';

/**
 * Component for the page which is displayed upon navigating to unmapped routes.
 * This component is loaded via the router and so does not include a selector.
 */
@Component({
  moduleId: module.id,
  templateUrl: './page_not_found.ng.html',
})
export class PageNotFound {
  rootPageConfig: PageConfig = RoutesService.ROOT_CONFIG;
}
