import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MaterialDesignModule} from '../../material_design_module';
import {PageNotFound} from './page_not_found';

@NgModule({
  declarations: [PageNotFound],
  imports: [
    MaterialDesignModule,
    RouterModule,
  ],
})
export class PageNotFoundModule {
}
