import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P000LoginComponent } from './auth/pages/p000-login/p000-login.component';
import { ResetPasswordComponent } from './auth/shared/components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./p-web/p-web.module').then((x) => x.PWebModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./p-admin/p-admin.module').then((x) => x.PAdminModule),
  },
  {
    path: 'login',
    component: P000LoginComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: { isReset: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
