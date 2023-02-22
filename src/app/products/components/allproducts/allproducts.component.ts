import { Component } from '@angular/core';
import { product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent {
//array declirations
products:product[]=[] //product is a custom type
categories:string[]=[]
loading:boolean=false
cartproducts:any[]=[]  //array to store data which comes from local storage 

constructor(private service:ProductsService){}
ngOnInit():void {
 this.getProducts()
 this.getcategories()
}

getProducts(){
//awl ma tklm elmethod yb2a b true
this.loading=true
//2 cases ---> 1-request success
return this.service.getAllProducts().subscribe((res:any) =>{
  //store api data in the array (which iterate on it by ngfor in html)
  this.products=res
  //lw elrequest rg3
  this.loading=false
  //print data to make sure it runs well
  //console.log(res)
  // 2- request failed
} ,error=>{
  alert("error found ")
  this.loading=false
  //console.log(error)
})
}

getcategories(){
  this.loading=true
  return this.service.getAllcategories().subscribe((res:any) =>{
  //store api data in the array (which iterate on it by ngfor in html)
  this.categories=res
  this.loading=false
  //console.log(res)
  // 2- request failed
} ,error=>{
  alert("error found ")
  this.loading=false
 
})
}
filtercategory(event:any){
let value=event.target.value;
//console.log(value)
if (value=="all"){
    this.getProducts()
    //getproducts - service btrg3hm kolhm 
}
else{
//send value to the method to make filter
this.getProductsCategory(value)
}}

getProductsCategory(keyword:string){
this.loading=true
return this.service.getProductsByCategory(keyword).subscribe((res:any)=>{
  //h3ml update 3la el products(array) ely 3ndii 
this.products=res
this.loading=false
},error=>
  {
    alert("ERROR")
    this.loading=false
  });

}

addtocart(event:any)
{
  //console.log(event)
   //json.stringify to send data
   //json.parse to recieve data 
   if ("cart" in localStorage){

   this.cartproducts=JSON.parse(localStorage.getItem("cart")!)  //kda b3t eldata mn el local l cart
    let exist=this.cartproducts.find(item=> item.item.id==event.item.id)
         if(exist){
         alert("already added")
         }
         else{
           this.cartproducts.push(event) //data from item to cart
          localStorage.setItem('cart',JSON.stringify(this.cartproducts)) //e3ml overwrite 3la elitem 
            }

  
   } 
   else{ //lw eldata msh mwgoda hndefha fii elarray
    this.cartproducts.push(event) //data from item to cart
   localStorage.setItem('cart',JSON.stringify(this.cartproducts))
   }

}
}
