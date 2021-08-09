import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(products: any[], filterTerm:any): any {
    
    if(filterTerm === 'Under $10'){
      return products.filter(x=>{
        if(x.price<10){
          return x
        }
      })
    }
    else if(filterTerm === '$10 - $50'){
      return products.filter(x=>{
        if(x.price>10 && x.price<50){
          return x
        }
      })
    }
    else if(filterTerm === '$50 - $100'){
      return products.filter(x=>{
        if(x.price>50 && x.price<100){
          return x
        }
      })
    }
    else if(filterTerm === '$100 - $500'){
      return products.filter(x=>{
        if(x.price>100 && x.price<500){
          return x
        }
      })
    }
    else if(filterTerm === 'Above $500'){
      return products.filter(x=>{
        if (x.price>500){
          return x
        }
      })
    }
    else
      return products
  }

}
