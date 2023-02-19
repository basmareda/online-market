import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
      HttpClientModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule,
   
  ]
})
export class SharedModule { }
