import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

  constructor(private PS:ProductsService , public routes:ActivatedRoute,private _snackBar: MatSnackBar) { }
  itemData:any 
  itemQuantity:number[] = []
  description:string[] = []
  id:number = 0
  load:boolean = false
  showErrorMesage:boolean = false
  imageUrl:string=""
  quantity:any = 0

  openSnackBar(val:any,value:any,act:any) {
    this._snackBar.open(value,act);
  }



  ngOnInit(): void {
    this.routes.params.subscribe(params => {
      this.id = parseInt(params['id'])
      this.PS.getProductbyId(this.id).subscribe((res:any)=>{
        console.log(res)
        if(res) {
          if(res.imageUrls.length>0) {
            this.imageUrl = res.imageUrls[0].imgUrl
          }
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
          if(this.itemData.content)
          this.description = this.itemData.content.split('. ')
          for(let i=1;i<=this.itemData.quantity;i++) {
            this.itemQuantity.push(i)
          }          
          if(this.itemData.quantity>0) {
            this.itemData.btnDisabled = false
            this.itemData.quantityText = "In Stock"
            this.itemData.quantityClass = "text text-success"
          }
          else{
            this.itemData.btnDisabled = true
            this.itemData.quantityText = "Out of Stock"
            this.itemData.quantityClass = "text text-danger"
          }
        }
      })
    });
  }

  getImageId(src:any) {
    this.imageUrl = src.imgUrl
  }

  selectQuantity(event:any) {
   this.quantity = event.target.value
  }

  displayQuantityError(val:any) {
    this.showErrorMesage = val
    setInterval(()=>{
      this.showErrorMesage = !val
    },5000)
  }
}















  //   for(let i=1;i<=this.itemData.quantity;i++){
  //     this.itemQuantity.push(i)
  //   }



  //   let ratingsSum:number = 0
  //   let count:number = 0
  //   let length = this.itemData.productReviews.length
  //   this.itemData.productReviews.map((x:any)=>{
  //     ratingsSum = ratingsSum+x.rating
  //     count++
  //     if(count == length)
  //       this.itemData.mainRating = ratingsSum/count
  //   })



  //  this.description = this.itemData.summary.split('. ')

  // this.itemData.afterDiscount = this.itemData.price - this.itemData.discount

  