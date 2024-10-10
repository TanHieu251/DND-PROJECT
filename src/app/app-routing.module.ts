import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P001HomeComponent } from './p-web/pages/p001-home/p001-home.component';
import { P000LoginComponent } from './auth/pages/p000-login/p000-login.component';
import { PWebModule } from './p-web/p-web.module';
import { LayoutComponent } from './p-web/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren:()=> import('./p-web/p-web.module').then(x=>x.PWebModule)
  },
  {
    path:'login',
    component:P000LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
