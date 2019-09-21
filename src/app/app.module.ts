import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { ThemeOptionsComponent } from './admin/theme-options/theme-options.component';
import { SliderComponent } from './slider/slider.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { HomeVerticalNavbarComponent } from './home-vertical-navbar/home-vertical-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterBarComponent } from './newsletter-bar/newsletter-bar.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { CategoryBoxComponent } from './category-box/category-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    HomeHeaderComponent,
    ThemeOptionsComponent,
    SliderComponent,
    InfoBarComponent,
    HomeVerticalNavbarComponent,
    FooterComponent,
    NewsletterBarComponent,
    ProductBoxComponent,
    CategoryBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
