import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(products: any[], filterTerm:any): any {

    console.log(filterTerm);
    

    if(filterTerm === 'Under 100'){
      return products.filter(x=>{
        if(x.price<100){
          return x
        }
      })
    }
    else if(filterTerm === '100 - 500'){
      return products.filter(x=>{
        if(x.price>100 && x.price<500){
          return x
        }
      })
    }
    else if(filterTerm === '500 - 1000'){
      return products.filter(x=>{
        if(x.price>500 && x.price<1000){
          return x
        }
      })
    }
    else if(filterTerm === '1000 - 5000'){
      return products.filter(x=>{
        if(x.price>1000 && x.price<5000){
          return x
        }
      })
    }
    else if(filterTerm === 'Above 5000'){
      return products.filter(x=>{
        if (x.price>5000){
          return x
        }
      })
    }
    else
      return products
  }

}
