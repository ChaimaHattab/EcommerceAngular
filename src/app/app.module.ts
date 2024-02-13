import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsModule } from './products/products.module';//////////////////////////
import { CategoriesModule } from './categories/categories.module';
import { HttpClientModule } from '@angular/common/http';/////////////////
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,////nzidoha
    CategoriesModule,///nzidoha
    HttpClientModule,//zidnaha loum 11/01/2024//madmni st3milt httpclient
    DataTablesModule,//zidnha lyoum 15/01/2024:::===>
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
