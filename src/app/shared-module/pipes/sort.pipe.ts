import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: any[], sortTerm: string): any {
    if(sortTerm === "low to high")
    return products.sort((x,y)=> x.afterDiscount - y.afterDiscount )
    else if(sortTerm === "high to low")
    return products.sort((x,y)=> y.afterDiscount - x.afterDiscount )
    else if(sortTerm === "rating")
    return products.sort((x,y)=> y.mainRating - x.mainRating )
    else if(sortTerm === "a-z")
    return products.sort((a, b) => a.title.localeCompare(b.title))
    else if(sortTerm === "z-a")
    return products.sort((a, b) => b.title.localeCompare(a.title))
    else
    return products
  }

}
