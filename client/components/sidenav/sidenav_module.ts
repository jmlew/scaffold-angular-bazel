import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';

import {MaterialDesignModule} from '../../material_design_module';

import {Sidenav} from './sidenav';

@NgModule({
  declarations: [Sidenav],
  exports: [Sidenav],
  imports: [
    RouterModule,
    MaterialDesignModule,
    FlexLayoutModule,
  ],
})
export class SidenavModule {
}
