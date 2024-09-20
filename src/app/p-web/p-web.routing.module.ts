import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {P001HomeComponent} from "./pages/p001-home/p001-home.component";
import * as path from "path";
import {P002CompanyComponent} from "./pages/p002-company/p002-company.component";
import {P003ContactComponent} from "./pages/p003-contact/p003-contact.component";
import {P004ProductComponent} from "./pages/p004-product/p004-product.component";
import {P004ProductDetailComponent} from "./pages/p004-product-detail/p004-product-detail.component";
import {P005ProjectDetailComponent} from "./pages/p005-project-detail/p005-project-detail.component";
import {P005ProjectComponent} from "./pages/p005-project/p005-project.component";


const routes: Routes = [
  {
  path:'',
    component: P001HomeComponent,
},{
  path:'home',
  component: P001HomeComponent,},
  {
    path:'company',
    component: P002CompanyComponent,},
  {
    path:'contact',
    component: P003ContactComponent,},
  {
    path:'product',
    component: P004ProductComponent,},
  {
    path:'product/:id',
    component: P004ProductDetailComponent,},
  {
    path:'project/',
    component: P005ProjectComponent,},
  {
    path:'project/:id',
    component: P005ProjectDetailComponent,},
  {
    path:'project/:id',
    component: P005ProjectDetailComponent,},
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export  class PWebRoutingModule{}
