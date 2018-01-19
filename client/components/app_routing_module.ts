import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RoutesService} from '../services/routes/routes';

import {Bar} from './bar/bar';
import {Foo} from './foo/foo';
import {Home} from './home/home';
import {PageNotFound} from './page_not_found/page_not_found';

const appRoutes: Routes = [
  // Note: Routes for Foo component are defined in 'foo/foo_routing_module'
  // which is imported into app_module and is therefore removed from here.
  {
    component: Bar,
    path: RoutesService.ROOT_CONFIG.bar.name,
    data: {page: RoutesService.ROOT_CONFIG.bar},
  },
  {
    component: Home,
    path: RoutesService.ROOT_CONFIG.home.name,
    data: {page: RoutesService.ROOT_CONFIG.home},
  },
  {
    path: '',
    redirectTo: RoutesService.ROOT_CONFIG.home.name,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFound,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
        {
            // enableTracing: true // Debugging purposes only.
        }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
