import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

  constructor(private PS:ProductsService , public routes:ActivatedRoute) { }
  itemData:any = {}
  itemQuantity:number[] = []
  description:string[] = []
  ngOnInit(): void {
    this.routes.queryParams.subscribe(
      params=>console.log(params)      
    )
   this.itemData = JSON.parse(`${localStorage.getItem("itemData")}`)
   console.log(this.itemData);
   
   for(let i=1;i<=this.itemData.quantity;i++){
     this.itemQuantity.push(i)
   }
   this.description = this.itemData.content.split('. ')
  }
  selectQuantity(event:any){
    console.log(event.target.value);
  }
}