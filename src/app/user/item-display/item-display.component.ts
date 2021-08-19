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
  itemData:any
  itemQuantity:number[] = []
  description:string[] = []
  id:number = 0
  load:boolean = false
  ngOnInit(): void {
    this.routes.params.subscribe(params => {
      this.id = parseInt(params['id'])
      this.PS.getProductbyId(this.id).subscribe((res:any)=>{
        console.log(res);
        if(res){
          this.itemData = res
          this.load = true
          let ratingsSum:number = 0
          let count:number = 0
          let length = res.productReviews.length
          res.productReviews.map((x:any)=>{
            ratingsSum = ratingsSum+x.rating
            count++
            if(count == length)
              this.itemData.mainRating = ratingsSum/count
          })
          
          this.itemData.afterDiscount = res.price - res.discount
          this.description = this.itemData.content.split('. ')
          for(let i=1;i<=this.itemData.quantity;i++){
            this.itemQuantity.push(i)
          }
          if(this.itemData.quantity>0){
            this.itemData.quantityText = "In Stock"
            this.itemData.quantityClass = "text text-success"
          }
          else{
            this.itemData.quantityText = "Out of Stock"
            this.itemData.quantityClass = "text text-danger"
          }
        }
        
      })
    });
  //  this.description = this.itemData.content.split('. ')   this is main

  // this.description = this.itemData.description.split('. ')

    

  }
  selectQuantity(event:any){
    console.log(event.target.value);
  }
}