import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CookieModule } from 'ngx-cookie';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  imports: [NgbModule, InfiniteScrollModule, CookieModule.forRoot(), ReactiveFormsModule, NgxSpinnerModule],
  exports: [FormsModule, CommonModule, NgbModule, InfiniteScrollModule, ReactiveFormsModule, NgxSpinnerModule]
})
export class SharedLibsModule {
  static forRoot() {
    return {
      ngModule: SharedLibsModule
    };
  }
}
