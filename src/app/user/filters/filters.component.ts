import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  constructor() { }

  rate:any
  price:any
  allPrices:Boolean = false
  allRates:Boolean = false
  sizes : string[] = []

  rates = [4,3,2,1]

  checked:Boolean = false

  ngOnInit(): void {
  }
  getRating(rate:any){
    this.allRates = true
    this.rate = rate
  }

  getPrice(data:any){
    this.allPrices = true
   this.price = data.target.innerHTML
  }
  clearFilters(){
    this.rate = 0
    this.price = ''
    this.allPrices = false
    this.allRates= false
  }
  outOfStock(data:any){
    this.checked = !this.checked
    this.rate = this.checked
  }
  getSizes(data:any){
    let count = 0
    let index:any
    this.sizes.map((x:any,y:any)=>{
      if(x==data.target.value)
      {
        index = y
        count++
      }
    })
    if(count==0)
    this.sizes.push(data.target.value)
    else{
      this.sizes.splice(index,1)
      count = 0
    }
  }
  clearPrices(){
    this.price = ''
    this.allPrices = false
  }
  clearRates(){
    this.rate = 0
    this.allRates= false
  }
}
