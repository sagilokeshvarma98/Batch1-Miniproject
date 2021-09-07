import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(products: any[], filterTerm:any): any {
    if(filterTerm === 'Under 100'){
      return products.filter(x=>{
        if(x.afterDiscount<100){
          return x
        }
      })
    }
    else if(filterTerm === '100 - 500'){
      return products.filter(x=>{
        if(x.afterDiscount>100 && x.afterDiscount<500){
          return x
        }
      })
    }
    else if(filterTerm === '500 - 1000'){
      return products.filter(x=>{
        if(x.afterDiscount>500 && x.afterDiscount<1000){
          return x
        }
      })
    }
    else if(filterTerm === '1000 - 5000'){
      return products.filter(x=>{
        if(x.afterDiscount>1000 && x.afterDiscount<5000){
          return x
        }
      })
    }
    else if(filterTerm === 'Above 5000'){
      return products.filter(x=>{
        if (x.afterDiscount>5000){
          return x
        }
      })
    }
    else
      return products
  }

}