import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sizeFilter'
})
export class SizeFilterPipe implements PipeTransform {
  transform(products: any, sizes: any): any {
    if(sizes)
      return products.filter((x:any)=>{
        if(x.size === sizes)
          return x
      })
      else
    return products
  }
}
