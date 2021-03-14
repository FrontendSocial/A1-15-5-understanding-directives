import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListModule } from './product-list/product-list.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { CheckoutModule } from './checkout/checkout.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule,
    ProductDetailsModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
