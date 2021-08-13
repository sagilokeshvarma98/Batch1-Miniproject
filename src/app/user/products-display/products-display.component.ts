import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.css']
})
export class ProductsDisplayComponent implements OnInit {

  constructor(public PS:ProductsService, private route:Router) { }

  ctrl = new FormControl(null, Validators.required);

  sortTerm:string = ""

  @Input() ratingTerm:Number = 0
  @Input() priceTerm:String = ''

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  Products:any[] = []
  
  NotifyAddedToCart:Boolean = false
  Title:string = ""
  ngOnInit(): void {
    this.PS.productsData().subscribe(res=>{
     this.Products = res
     console.log(res);
     res.map((x:any)=>{
       let length = x.length
      let totalRates = 0
      let count = 0
       x.productReviews.map((x:any)=>{
         totalRates = totalRates + x.rating
          count++ 
          console.log(count,length);
          
          if(length == count)
         console.log(count,totalRates/count);
       })
     })
    })
  }

  displayNotification(event:any){
    this.NotifyAddedToCart = event
    setTimeout(()=>{
      this.NotifyAddedToCart = false
    },500)
  }

  viewFilterType(event:any){
   this.sortTerm =  event.target.value
  }

  getItem(x:any){
    localStorage.setItem('itemData',JSON.stringify(x))
    this.route.navigate([`/itemData`])
  }
}
