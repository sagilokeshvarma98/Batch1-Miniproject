import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], filterTerm:any): any {
    
    if(filterTerm === true){
      return products.filter(x=>{
        if(x.quantity>0)
          return x
      })
    }
    else if(filterTerm>0){
      let filteredData = products.filter(x=>{
        if(x.mainRating >= filterTerm)
        return x
      }).sort((x,y)=> x.mainRating - y.mainRating)
      return filteredData
    }
    else
      return products
  }

}
