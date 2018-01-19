import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdSidenavModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';

import {MaterialDesignModule} from '../material_design_module';
import {BazService} from '../services/baz/baz';
import {RoutesService} from '../services/routes/routes';

import {App} from './app';
import {AppRoutingModule} from './app_routing_module';
import {FooModule} from './foo/foo_module';
import {HeaderModule} from './header/header_module';
import {PageNotFoundModule} from './page_not_found/page_not_found_module';
import {SidenavModule} from './sidenav/sidenav_module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    MdSidenavModule,
    HeaderModule,
    PageNotFoundModule,
    FlexLayoutModule,
    SidenavModule,
    // FooModule contains child routes which require importing here.
    FooModule,
    // AppRoutingModule must come after ALL modules which contain routes.
    AppRoutingModule,
  ],
  providers: [
    // Global services provided throughout the app at root-level as singletons.
    BazService,
    RoutesService,
  ],
  bootstrap: [App],
})
export class AppModule {
}
