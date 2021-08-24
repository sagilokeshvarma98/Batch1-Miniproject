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
  // = {
  //   summary: "The realme 8 features a Super AMOLED Display so that you can enjoy vivid and eye-catching visuals that will enhance your viewing experience while streaming content, gaming, and so on. The Tilt-shift mode of the mobile phone can be used to play around with",
  //   createdAt: "2021-08-12T05:02:18.000+00:00",
  //   price:9999,
  //   discount: 1000,
  //   endsAt: "2021-08-20T05:02:29.000+00:00",
  //   id: 1,
  //   imageUrls: [
  //       {
  //           imgUrl : "https://m.media-amazon.com/images/I/61s3u-HPx0L._UL1500_.jpg"
  //       },
  //       {
  //           imgUrl : "https://m.media-amazon.com/images/I/61F1Qlq2wSL._UL1500_.jpg"
  //       },
  //       {
  //           imgUrl : "https://m.media-amazon.com/images/I/61QJTKeZPoL._UL1500_.jpg"
  //       },
  //       {
  //           imgUrl : "https://m.media-amazon.com/images/I/71yjpM3SrjL._UL1500_.jpg"
  //       }
  //   ],
  //   productReviews: [
  //       {
  //           rating:5,
  //           content: "Nice realme.4 star camera.5 star battery.5 star super amoled display. 4 star look.4 star sound quality.5 star clean ui. No third party push notifications.5 star fingerprint scanner in display is too good .no over heating problem."
  //       },
  //       {
  //           rating:3
  //       }
  //   ],
  //   publishedAt: null,
  //   quantity: 98,
  //   shop: 0,
  //   sku: "MOBGFH8TNGEKSCTY",
  //   slug: "realme-8-cyber-black-128-gb",
  //   startsAt: null,
  //   category: "Mobile",
  //   title: "realme 8 (Cyber Black, 128 GB)  (6 GB RAM)",
  //   type: 2239
  //   }



  itemQuantity:number[] = []
  description:string[] = []
  id:number = 0
  load:boolean = false
  imageUrl:string=""
  ngOnInit(): void {



    this.routes.params.subscribe(params => {
      this.id = parseInt(params['id'])
      this.PS.getProductbyId(this.id).subscribe((res:any)=>{
        console.log(res)
        if(res){
          this.imageUrl = res.imageUrls[0].imgUrl
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
          this.description = this.itemData.summary.split('. ')
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

  
  }

  getImageId(src:any){
    console.log(src.imgUrl);
    
    this.imageUrl = src.imgUrl
  }

  selectQuantity(event:any){
    console.log(event.target.value);
  }
}