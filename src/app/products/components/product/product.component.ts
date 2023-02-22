import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  //object
@Input() data!:product
//from child to parent , 3lshan y2olii which item 
@Output() item=new EventEmitter()
addbutton:boolean=false;
amount:number=0
id:any

add(){
  //hb3t elitem ely wa2f 3leha ely hya data
  //hb3tha k object m3 el3dd
 this.item.emit({item:this.data,quantity:this.amount})
}

}
