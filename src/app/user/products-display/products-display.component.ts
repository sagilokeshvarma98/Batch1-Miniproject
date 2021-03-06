import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.css']
})
export class ProductsDisplayComponent implements OnInit {

  constructor(public PS: ProductsService, private route: Router) { }

  ctrl = new FormControl(null, Validators.required);

  sortTerm: string = ""

  @Input() ratingTerm: Number = 0
  @Input() priceTerm: String = ''

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  Products: any[] = []
  length : any 
  pageNumber:number = 1 
  NotifyAddedToCart: Boolean = false
  Title: string = ""

  ngOnInit(): void {
    this.PS.productsData().subscribe(res => {
      this.Products = res
      this.length = res.length //For json file
      res.map((x: any, index: any) => {
        x.afterDiscount = x.price-x.discount
        let length = res[index].productReviews.length
        let totalRates = 0
        let count = 0
        if(length == 0){
          x.mainRating = 0
        }
        else
        x.productReviews.map((y: any) => {
          totalRates = totalRates + y.rating
          count++
          if (length == count)
          x.mainRating = totalRates/length
        })
      }   
      )
    })
  }
  displayNotification(event: any) {
    this.NotifyAddedToCart = event
    setTimeout(() => {
      this.NotifyAddedToCart = false
    }, 500)
  }

  viewFilterType(event: any) {
    this.sortTerm = event.target.value
  }

  // getItem(x: any) {
  //   localStorage.setItem('itemData', JSON.stringify(x))
  // }
}