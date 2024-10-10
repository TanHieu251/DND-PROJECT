
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule} from 'ngx-pagination';

import { HeaderComponent } from './p-header/p-heaader/p-heaader.component';
import { P001HomeComponent } from './p-web/pages/p001-home/p001-home.component';
import { Header2Component } from './p-header/p-header2/p-header2.component';
import { PFooterComponent } from './p-footer/p-footer/p-footer.component';
import { P002CompanyComponent } from './p-web/pages/p002-company/p002-company.component';
import { P004ProductComponent } from './p-web/pages/p004-product/p004-product.component';
import { P005ProjectComponent } from './p-web/pages/p005-project/p005-project.component';
import { P003ContactComponent } from './p-web/pages/p003-contact/p003-contact.component';
import { P004ProductDetailComponent } from './p-web/pages/p004-product-detail/p004-product-detail.component';
import { SlideBannerComponent } from './p-web/shared/components/C-Company/slide-banner/slide-banner.component';
import { MoreInformationComponent } from './p-web/shared/components/C-Home/more-information/more-information.component';
import { ContactComponent } from './p-web/shared/components/C-Home/contact/contact.component';
import { ProductItemComponent } from './p-web/shared/components/C-Home/product-item/product-item.component';
import { ProjectSlideComponent } from './p-web/shared/components/C-Home/project-slide/project-slide.component';
import { IntroComponent } from './p-web/shared/components/C-Home/intro/intro.component';
import { BannerComponent } from './p-web/shared/components/C-Home/banner/banner.component';
import { CContentComponent } from './p-web/shared/components/C-Company/c-content/c-content.component';
import { CMembersComponent } from './p-web/shared/components/C-Company/c-members/c-members.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CContactComponent } from './p-web/shared/components/c-contact/c-contact/c-contact.component';
import { ProductBannerComponent } from './p-web/shared/components/C-products/product-banner/product-banner.component';
import { ProductListComponent } from './p-web/shared/components/C-products/product-list/product-list.component';
import { ProductDetailComponent } from './p-web/shared/components/C-products/product-detail/product-detail.component';
import { ProductInforRelationComponent } from './p-web/shared/components/C-products/product-infor-relation/product-infor-relation.component';
import { ProductRelationComponent } from './p-web/shared/components/C-products/product-relation/product-relation.component';
import { AuthModule } from './auth/auth.module';
import { provideHttpClient } from '@angular/common/http';
import { ProjectListComponent } from './p-web/shared/components/C-project/project-list/project-list.component';
import { ProjectDetailComponent } from './p-web/shared/components/C-project/project-detail/project-detail.component';
import { P005ProjectDetailComponent } from './p-web/pages/p005-project-detail/p005-project-detail.component';
import { ImageProjectComponent } from './p-web/shared/components/C-project/image-project/image-project.component';



const routes: Routes = [
  { path: 'home', component: P001HomeComponent },
  { path: 'about', component: P002CompanyComponent },
  { path: 'products', component: P004ProductComponent },
  {path: 'productdetails/:name', component:P004ProductDetailComponent},
  {path: 'productdetails/:name', component:ProductInforRelationComponent},
  { path: 'projects', component: P005ProjectComponent },
  { path:'project-detail', component:P005ProjectDetailComponent},
  { path:'project-detail/:title', component:ProjectDetailComponent},
  { path: 'contact', component: P003ContactComponent }

  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    P001HomeComponent,
    Header2Component,
    PFooterComponent,
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
    P005ProjectDetailComponent,
    ProductDetailComponent,
    ProductBannerComponent,
    ProductListComponent,
    ProductInforRelationComponent,
    ProductRelationComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ImageProjectComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    AuthModule
  ],
  // exports:[RouterModule],
  providers: [provideHttpClient()],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
