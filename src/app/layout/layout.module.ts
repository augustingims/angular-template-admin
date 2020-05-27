import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopnavbarComponent} from './topnavbar/topnavbar.component';
import {FooternavbarComponent} from './footernavbar/footernavbar.component';
import {RouterModule} from '@angular/router';
import {AsidenavbarComponent} from './asidenavbar/asidenavbar.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule
  ],
  declarations: [
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent
  ],
  exports: [
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent
  ]
})
export class LayoutModule { }
