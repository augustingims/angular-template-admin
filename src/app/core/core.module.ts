import {LOCALE_ID, NgModule} from '@angular/core';
import {DatePipe, registerLocaleData} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgbDateMomentAdapter} from '../shared';
import locale from '@angular/common/locales/en';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  declarations: [],
  providers: [
    Title,
    {
      provide: LOCALE_ID,
      useValue: 'en'
    },
    { provide: NgbDateAdapter, useClass: NgbDateMomentAdapter },
    DatePipe
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(locale);
  }
}
