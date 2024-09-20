import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {P001HomeComponent} from "./p-web/pages/p001-home/p001-home.component";

const routes: Routes = [
  {
    path:'',
    component: P001HomeComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
