import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
//dependance injection
  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get("https://fakestoreapi.com/products")

  }
  getAllcategories(){
    return this.http.get("https://fakestoreapi.com/products/categories")
  }
  //keyword--> variable
  getProductsByCategory(keyword:string){
    return this.http.get("https://fakestoreapi.com/products/category/"+keyword)
  }
  getProductsById(id:any){
    return this.http.get("https://fakestoreapi.com/products/"+id)


  }
}
