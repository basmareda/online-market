import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';

const routes: Routes = [
  {path:"products",component:AllproductsComponent},
{path:"details/:id",component:ProductDetailsComponent},
{path:"cart",component:CartComponent},
{path:"**",redirectTo: "products",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
