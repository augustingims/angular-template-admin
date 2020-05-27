import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {loginRoute} from './login/login.route';
const routes: Routes = [
    loginRoute
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrypointRoutingModule { }
