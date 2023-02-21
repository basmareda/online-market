import { Component } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
constructor(private service:CartsService){}
cartproducts:any[]=[]
total:any=0
success:boolean=false

ngOnInit():void{
  this.getcartProducts()
}


getcartProducts(){
  if ("cart" in localStorage){

    this.cartproducts=JSON.parse(localStorage.getItem("cart")!)  
  }
  //console.log(this.cartproducts)
  //b3d ma gbt el data h call elmethod to get total
  this.getCartTotal()
}

addAmount(index: number){
  this.cartproducts[index].quantity++
  this.getCartTotal()
  localStorage.setItem('cart',JSON.stringify(this.cartproducts))

}
miunsAmount (index: number){
  this.cartproducts[index].quantity--
  this.getCartTotal()
  localStorage.setItem('cart',JSON.stringify(this.cartproducts))
}
detectchange(){
  this.getCartTotal()
  localStorage.setItem('cart',JSON.stringify(this.cartproducts))
}
deleteproduct(index:number){
this.cartproducts.splice(index,1)
this.getCartTotal()
localStorage.setItem('cart',JSON.stringify(this.cartproducts))


}
clearcart(){
  this.cartproducts=[]
  this.getCartTotal()
  localStorage.setItem('cart',JSON.stringify(this.cartproducts))
}
getCartTotal(){
  this.total=0
  for ( let x in this.cartproducts){
    this.total+=this.cartproducts[x].item.price * this.cartproducts[x].quantity
  }
}

addCart(){
  let products= this.cartproducts.map(item =>{
     return {productid:item.item.id, guantity:item.quantity}
  })
  let model={
    userid:5,
    date: new Date(), //get current date 
    products:products
  }
  this.service.createNewCart(model).subscribe(res => {

    this.success=true
  })
console.log(model);
  
}

}
