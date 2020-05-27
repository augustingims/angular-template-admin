import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '../shared/shared.module';
import {UiRoutingModule} from './ui-routing.module';
import {UiComponent} from './ui.component';

@NgModule({
  imports: [
    UiRoutingModule,
    SharedModule.forRoot(),
    LayoutModule
  ],
  declarations: [ UiComponent ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UiModule { }
