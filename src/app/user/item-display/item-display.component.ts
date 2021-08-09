import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

  constructor(private PS:ProductsService) { }
  itemData:any = {}
  itemQuantity:number[] = []
  description:string[] = []
  ngOnInit(): void {
   this.itemData = JSON.parse(`${localStorage.getItem("itemData")}`)
   for(let i=1;i<=this.itemData.quantity;i++){
     this.itemQuantity.push(i)
   }
   this.description = this.itemData.description.split('. ')
  }
  selectQuantity(event:any){
    console.log(event.target.value);
    
  }
}
