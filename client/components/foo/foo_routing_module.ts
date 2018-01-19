import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RoutesService} from '../../services/routes/routes';
import {Foo} from './foo';
import {FooOne} from './fooone/fooone';
import {FooTwo} from './footwo/footwo';

const fooRoutes: Routes = [
  // Top route extends those defined in the parent module 'app_routing_module'.
  // 'Foo' component route is therefore removed from the main route module.
  {
    component: Foo,
    path: RoutesService.ROOT_CONFIG.foo.name,
    data: {page: RoutesService.ROOT_CONFIG.foo},
    // Child routes which are placed in the Foo component's router outlet.
    // Child paths are relative to the path of the main route.
    children: [
      {
        path: RoutesService.FOO_CONFIG.fooone.name,
        component: FooOne,
        data: {page: RoutesService.FOO_CONFIG.fooone},
      },
      {
        path: RoutesService.FOO_CONFIG.footwo.name,
        component: FooTwo,
        data: {page: RoutesService.FOO_CONFIG.footwo},
      },
      {
        path: '',
        redirectTo: RoutesService.FOO_CONFIG.fooone.name,
        pathMatch: 'full',
      },
    ]
  },
];

@NgModule(
    {imports: [RouterModule.forChild(fooRoutes)], exports: [RouterModule]})
export class FooRoutingModule {
}
