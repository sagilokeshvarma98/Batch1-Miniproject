import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: any[], sortTerm: string): any {
    if(sortTerm === "low to high")
    return products.sort((x,y)=> x.price - y.price )
    else if(sortTerm === "high to low")
    return products.sort((x,y)=> y.price - x.price )
    else if(sortTerm === "rating")
    return products.sort((x,y)=> y.rating - x.rating )
    else if(sortTerm === "name")
    return products.sort((a, b) => a.title.localeCompare(b.title))
    else
    return products
  }

}
