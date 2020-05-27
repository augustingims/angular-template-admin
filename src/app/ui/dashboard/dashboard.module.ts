import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DashboardComponent,
  dashboardRoute
} from './';
import {SharedModule} from '../../shared/shared.module';

const ENTITY_STATES = [dashboardRoute];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    DashboardComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {}
