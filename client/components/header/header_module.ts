import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

import {MaterialDesignModule} from '../../material_design_module';

import {Header} from './header';

@NgModule({
  declarations: [Header],
  exports: [Header],
  imports: [
    RouterModule,
    MaterialDesignModule,
    MdToolbarModule,
    FlexLayoutModule,
  ],
})
export class HeaderModule {
}
