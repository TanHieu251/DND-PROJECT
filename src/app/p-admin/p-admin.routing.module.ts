import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { P001ProductCategoryComponent } from './pages/p001-product-category/p001-product-category.component';
import { P002ProductManageComponent } from './pages/p002-product-manage/p002-product-manage.component';
import { P003ProjectManageComponent } from './pages/p003-project-manage/p003-project-manage.component';
import { P004NewsManageComponent } from './pages/p004-news-manage/p004-news-manage.component';
import { P005ServicesManageComponent } from './pages/p005-services-manage/p005-services-manage.component';
import { P006OrderManageComponent } from './pages/p006-order-manage/p006-order-manage.component';
import { P007CustomerManageComponent } from './pages/p007-customer-manage/p007-customer-manage.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'productManage', pathMatch: 'full' },
        { path: 'product-category', component: P001ProductCategoryComponent },
        { path: 'productManage', component: P002ProductManageComponent },
        { path: 'projectManage', component: P003ProjectManageComponent },
        { path: 'newsManage', component: P004NewsManageComponent},
        { path: 'servicesManage', component: P005ServicesManageComponent},
        { path: 'orderManage', component: P006OrderManageComponent },
        { path: 'customerManage', component: P007CustomerManageComponent },
        
      ],
    },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PAdminRoutingModule {}
