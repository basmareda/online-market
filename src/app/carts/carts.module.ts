import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  exports:[
    CartComponent,
    RouterModule
  ]
})
export class CartsModule { }
