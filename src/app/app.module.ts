import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaaderComponent } from './p-web/pages/p-heaader/p-heaader.component';
import { P001HomeComponent } from './p-web/pages/p001-home/p001-home.component';

// import { InputsModule } from '@progress/kendo-angular-inputs';
// import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    HeaaderComponent,
    P001HomeComponent
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
