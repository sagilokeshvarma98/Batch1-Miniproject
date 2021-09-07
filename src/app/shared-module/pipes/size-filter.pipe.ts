import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeFilter'
})
export class SizeFilterPipe implements PipeTransform {

  transform(products: any, sizes: any): any {
    if(sizes)
      console.log(products.map((x:any)=>{
        if(x.size === sizes)
          console.log(x);
      }));
      
    // let sizesArray:any[] = []
    // sizesArray.push(sizes)
    return products
  }
}
