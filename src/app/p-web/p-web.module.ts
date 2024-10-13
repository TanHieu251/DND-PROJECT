import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PWebRoutingModule} from "./p-web.routing.module";
import { HeaderComponent } from '../p-header/p-heaader/p-heaader.component';
import { Header2Component } from '../p-header/p-header2/p-header2.component';
import { PFooterComponent } from '../p-footer/p-footer/p-footer.component';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { P001HomeComponent } from './pages/p001-home/p001-home.component';
import { BannerComponent } from './shared/components/C-Home/banner/banner.component';
import { IntroComponent } from './shared/components/C-Home/intro/intro.component';
import { ContactComponent } from './shared/components/C-Home/contact/contact.component';
import { ProjectSlideComponent } from './shared/components/C-Home/project-slide/project-slide.component';
import { ProductItemComponent } from './shared/components/C-Home/product-item/product-item.component';
import { MoreInformationComponent } from './shared/components/C-Home/more-information/more-information.component';
import { P002CompanyComponent } from './pages/p002-company/p002-company.component';
import { SlideBannerComponent } from './shared/components/C-Company/slide-banner/slide-banner.component';
import { CContentComponent } from './shared/components/C-Company/c-content/c-content.component';
import { CMembersComponent } from './shared/components/C-Company/c-members/c-members.component';
import { CContactComponent } from './shared/components/c-contact/c-contact/c-contact.component';
import { P003ContactComponent } from './pages/p003-contact/p003-contact.component';
import { P004ProductComponent } from './pages/p004-product/p004-product.component';
import { P004ProductDetailComponent } from './pages/p004-product-detail/p004-product-detail.component';
import { P005ProjectComponent } from './pages/p005-project/p005-project.component';
import { ProductDetailComponent } from './shared/components/C-products/product-detail/product-detail.component';
import { ProductBannerComponent } from './shared/components/C-products/product-banner/product-banner.component';
import { ProductListComponent } from './shared/components/C-products/product-list/product-list.component';
import { ProductInforRelationComponent } from './shared/components/C-products/product-infor-relation/product-infor-relation.component';
import { ProductRelationComponent } from './shared/components/C-products/product-relation/product-relation.component';
import { ProjectDetailComponent } from './shared/components/C-project/project-detail/project-detail.component';
import { ProjectListComponent } from './shared/components/C-project/project-list/project-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { P005ProjectDetailComponent } from './pages/p005-project-detail/p005-project-detail.component';
import { ImageProjectComponent } from './shared/components/C-project/image-project/image-project.component';



@NgModule({
  declarations: [
    HeaderComponent,
    Header2Component,
    PFooterComponent,
    LayoutComponent,
    P001HomeComponent,
    BannerComponent,
    IntroComponent,
    ContactComponent,
    ProjectSlideComponent,
    ProductItemComponent,
    MoreInformationComponent,
    P002CompanyComponent,
    SlideBannerComponent,
    CContentComponent,
    CMembersComponent,
    CContactComponent,
    P003ContactComponent,
    P004ProductComponent,
    P004ProductDetailComponent,
    P005ProjectComponent,
    ProductDetailComponent,
    ProductBannerComponent,
    ProductListComponent,
    ProductInforRelationComponent,
    ProductRelationComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    P005ProjectDetailComponent,
    ImageProjectComponent

  ],
  imports: [
    CommonModule,
    PWebRoutingModule,
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,

  ]
})
export class PWebModule { }
