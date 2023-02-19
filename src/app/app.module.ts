import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    RouterModule,
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ProductsModule,
    CartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
