import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PWebRoutingModule } from './p-web.routing.module';
import { PFooterComponent } from '../p-footer/p-footer/p-footer.component';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
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
import { AuthServiceService } from '../auth/shared/services/auth-service.service';
import { MatTableModule } from '@angular/material/table';

import { P005ProjectDetailComponent } from './pages/p005-project-detail/p005-project-detail.component';
import { ImageProjectComponent } from './shared/components/C-project/image-project/image-project.component';
import { CCartComponent } from './shared/components/C-cart/c-cart/c-cart.component';
import { P006CartComponent } from './pages/p006-cart/p006-cart/p006-cart.component';
import { MessageCartComponent } from './shared/components/C-message/message-cart/message-cart.component';
import { ProductListHomeComponent } from './shared/components/C-Home/product-list-home/product-list-home.component';
import { HomeServicesComponent } from './shared/components/C-Home/home-services/home-services.component';
import { HomeNewsComponent } from './shared/components/C-Home/home-news/home-news.component';
import { HeaderComponent } from './shared/components/p-heaader/p-heaader.component';
import { SearchDialogComponent } from './shared/components/search-dialog/search-dialog.component';
import { P008ServiceComponent } from './pages/p008-service/service/p008-service.component';
import { ServiceBannerComponent } from './shared/components/C-Services/service-banner/service-banner.component';
import { ServiceContentComponent } from './shared/components/C-Services/service-content/service-content.component';
import { MatPaginatorModule } from '@angular/material/paginator';

import { P007NewsComponent } from './pages/p007-news/p007-news/p007-news.component';
import { NewsContentComponent } from './shared/components/C-News/news-content/news-content.component';
import { NewBannerComponent } from './shared/components/C-News/new-benner/new-benner.component';
import { OustandingContentComponent } from './shared/components/C-Company/oustanding-content/oustanding-content.component';
import { NewsRealationComponent } from './shared/components/C-News/news-realation/news-realation.component';

@NgModule({
  declarations: [
    HeaderComponent,
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
    OustandingContentComponent,
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
    ProductInforRelationComponent,
    ProductRelationComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    P005ProjectDetailComponent,
    ImageProjectComponent,
    CCartComponent,
    P006CartComponent,
    MessageCartComponent,
    ProductListComponent,
    ProductListHomeComponent,
    HomeServicesComponent,
    HomeNewsComponent,
    SearchDialogComponent,
    P008ServiceComponent,
    ServiceBannerComponent,
    ServiceContentComponent,
    P007NewsComponent,
    NewBannerComponent,
    NewsContentComponent,
    NewsRealationComponent
  ],
  imports: [
    CommonModule,
    PWebRoutingModule,
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [AuthServiceService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PWebModule {}
