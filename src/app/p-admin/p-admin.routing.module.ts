import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './shared/components/table/table.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { CustomerManageComponent } from './pages/admin-manage/customer-manage/customer-manage.component';
import { NewsManageComponent } from './pages/admin-manage/news-manage/news-manage.component';
import { OrderManageComponent } from './pages/admin-manage/order-manage/order-manage.component';
import { ProductManageComponent } from './pages/admin-manage/product-manage/product-manage.component';
import { ProjectManageComponent } from './pages/admin-manage/project-manage/project-manage.component';
import { ServiceManageComponent } from './pages/admin-manage/service-manage/service-manage.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'productManage', pathMatch: 'full' },
        { path: 'productManage', component: ProductManageComponent },
        { path: 'projectManage', component: ProjectManageComponent },
        { path: 'newsManage', component: NewsManageComponent },
        { path: 'servicesManage', component: ServiceManageComponent },
        { path: 'orderManage', component: OrderManageComponent },
        { path: 'customerManage', component: CustomerManageComponent },

      ],
    },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PAdminRoutingModule {}
