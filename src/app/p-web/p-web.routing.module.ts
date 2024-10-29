import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { P001HomeComponent } from './pages/p001-home/p001-home.component';
import { P002CompanyComponent } from './pages/p002-company/p002-company.component';
import { P003ContactComponent } from './pages/p003-contact/p003-contact.component';
import { P004ProductComponent } from './pages/p004-product/p004-product.component';
import { P004ProductDetailComponent } from './pages/p004-product-detail/p004-product-detail.component';
import { P005ProjectComponent } from './pages/p005-project/p005-project.component';
import { P005ProjectDetailComponent } from './pages/p005-project-detail/p005-project-detail.component';
import { P006CartComponent } from './pages/p006-cart/p006-cart/p006-cart.component';
import { P007NewsComponent } from './pages/p007-news/p007-news/p007-news.component';;
import { P008ServiceComponent } from './pages/p008-service/service/p008-service.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: P001HomeComponent,
      },
      {
        path: 'about',
        component: P002CompanyComponent,
      },
      {
        path: 'contacts',
        component: P003ContactComponent,
      },
      {
        path: 'products',
        component: P004ProductComponent,
      },
      {
        path: 'product/:name',
        component: P004ProductDetailComponent,
      },
      {
        path: 'projects',
        component: P005ProjectComponent,
      },
      {
        path: 'project/:title',
        component: P005ProjectDetailComponent,
      },
      {
        path: 'cart',
        component: P006CartComponent,
      },
      {
        path: 'services',
        component: P008ServiceComponent,
      },
      {
        path: 'news',
        component: P007NewsComponent,
      }
    ],
  },
];

@NgModule({
  imports:
  [
    RouterModule.forChild(routes),
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  exports: [RouterModule],
})
export class PWebRoutingModule {}
