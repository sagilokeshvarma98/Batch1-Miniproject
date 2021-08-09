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
  clearPrices(){
    this.price = ''
    this.allPrices = false
  }
  clearRates(){
    this.rate = 0
    this.allRates= false
  }
}
