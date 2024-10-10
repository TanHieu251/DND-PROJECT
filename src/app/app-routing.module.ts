import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P001HomeComponent } from './p-web/pages/p001-home/p001-home.component';
import { P000LoginComponent } from './auth/pages/p000-login/p000-login.component';

const routes: Routes = [
  {
    path: '',
    component: P001HomeComponent,
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
