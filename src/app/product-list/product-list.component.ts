import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

 products = [
   {name: "Abc Design" , price: "1000"} ,
   {name: "Cba Design" , price: "2000"} ,
   {name: "Abc Design" , price: "3000"} ,
   {name: "Cba Design" , price: "4000"} ,
   {name: "Abc Design" , price: "5000"} ,
   {name: "Cba Design" , price: "6000"} ,
   {name: "Abc Design" , price: "7000"} ,
   {name: "Cba Design" , price: "8000"} ,
   {name: "Abc Design" , price: "9000"} 
 ]

}
