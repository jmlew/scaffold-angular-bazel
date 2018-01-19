import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';

import {MaterialDesignModule} from '../../material_design_module';

import {Home} from './home';

@NgModule({
  declarations: [Home],
  imports: [
    MaterialDesignModule,
    RouterModule,
    FlexLayoutModule,
  ],
})
export class HomeModule {
}
