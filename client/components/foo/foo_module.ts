import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MaterialDesignModule} from '../../material_design_module';
import {Foo} from './foo';
import {FooRoutingModule} from './foo_routing_module';

@NgModule({
  declarations: [Foo],
  imports: [
    FooRoutingModule,
    FlexLayoutModule,
    MaterialDesignModule,
  ],
})
export class FooModule {
}
