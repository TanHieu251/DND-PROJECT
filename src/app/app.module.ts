import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaaderComponent } from './p-header/p-heaader/p-heaader.component';
import { P001HomeComponent } from './p-web/pages/p001-home/p001-home.component';
import { Header2Component } from './p-header/p-header2/p-header2.component';
import { PFooterComponent } from './p-footer/p-footer/p-footer.component';
import { BannerComponent } from './p-web/shared/components/banner/banner.component';
import { IntroComponent } from './p-web/shared/components/intro/intro.component';

// import { InputsModule } from '@progress/kendo-angular-inputs';
// import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    HeaaderComponent,
    P001HomeComponent,
    Header2Component,
    PFooterComponent,
    BannerComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // InputsModule,
    // ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
