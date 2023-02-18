import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  //input because we use data from parent() to child
@Input() title:string=""
@Input() data:any[]=[]

//hb3t data mn hna l el parent (products)
@Output() selectedvalue= new EventEmitter()

detectChanges(event:any){
  //elevent da el value elly b check beha
  this.selectedvalue.emit(event)
}


}
