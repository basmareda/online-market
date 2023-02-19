import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    CartComponent,
    RouterModule
  ]
})
export class CartsModule { }
