import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { productsFilter } from './filters/productsFilter.pipe'
import { paginationFilter } from './filters/paginationFilter.pipe';
import { ProductComponent } from './product/product.component';
import { BascetComponent } from './bascet/bascet.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    productsFilter,
    paginationFilter,
    ProductComponent,
    BascetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
