import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaaderComponent } from './p-header/p-heaader/p-heaader.component';
import { P001HomeComponent } from './p-web/pages/p001-home/p001-home.component';
import { Header2Component } from './p-header/p-header2/p-header2.component';
import { PFooterComponent } from './p-footer/p-footer/p-footer.component';
import { BannerComponent } from './p-web/shared/components/banner/banner.component';
import { IntroComponent } from './p-web/shared/components/intro/intro.component';
import { ProjectSlideComponent } from './p-web/shared/components/project-slide/project-slide.component';
import { ProductItemComponent } from './p-web/shared/components/product-item/product-item.component';
import { P002CompanyComponent } from './p-web/pages/p002-company/p002-company.component';
import { P004ProductComponent } from './p-web/pages/p004-product/p004-product.component';
import { P005ProjectComponent } from './p-web/pages/p005-project/p005-project.component';
import { P003ContactComponent } from './p-web/pages/p003-contact/p003-contact.component';
import { P004ProductDetailComponent } from './p-web/pages/p004-product-detail/p004-product-detail.component';
import { ContactComponent } from './p-web/shared/components/contact/contact.component';
import { MoreInformationComponent } from './p-web/shared/components/more-information/more-information.component';
// import { InputsModule } from '@progress/kendo-angular-inputs';
// import { ButtonsModule } from '@progress/kendo-angular-buttons';

const routes: Routes = [
  { path: 'home', component: P001HomeComponent },
  { path: 'about', component: P002CompanyComponent },
  { path: 'products', component: P004ProductComponent },
  {path: 'productdetails', component:P004ProductDetailComponent},
  { path: 'projects', component: P005ProjectComponent },
  { path: 'contact', component: P003ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaaderComponent,
    P001HomeComponent,
    Header2Component,
    PFooterComponent,
    BannerComponent,
    IntroComponent,
    ContactComponent,
    ProjectSlideComponent,
    ProductItemComponent,
    MoreInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)

    // InputsModule,
    // ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
