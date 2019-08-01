import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactMePageComponent } from './components/contact-me-page/contact-me-page.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactMePageComponent,
    WorkHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
