import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {EntrypointRoutingModule} from './entrypoint-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    EntrypointRoutingModule
  ],
  declarations: [LoginComponent]
})
export class EntrypointModule { }
