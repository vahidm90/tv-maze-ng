import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCarouselComponent } from './components/show-carousel/show-carousel.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { FetchErrorComponent } from './components/fetch-error/fetch-error.component';
import { LoadingModule } from './modules/loading/loading.module';
import { HttpClientModule } from '@angular/common/http';
import { ShowPageComponent } from './pages/show/show-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCarouselComponent,
    ShowCardComponent,
    HomePageComponent,
    FetchErrorComponent,
    ShowPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
