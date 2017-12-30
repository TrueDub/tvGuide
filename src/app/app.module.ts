import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ShowSearchComponent} from './show-search/show-search.component';
import {ShowSearchService} from './services/show-search.service';


@NgModule({
  declarations: [
    AppComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShowSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
