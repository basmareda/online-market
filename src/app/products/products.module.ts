import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { SelectComponent } from '../shared/components/select/select.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllproductsComponent,
    ProductDetailsComponent,
    ProductComponent,
    
    
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    
  ],
  exports:[
    AllproductsComponent,
    ProductDetailsComponent,
    ProductComponent,
    RouterModule
   
  ]
})
export class ProductsModule { }
