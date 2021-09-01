import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeFilter'
})
export class SizeFilterPipe implements PipeTransform {

  transform(products: any, sizes: any): any {
    // let sizesArray:any[] = []
    // sizesArray.push(sizes)
    console.log(sizes);
    return products
  }
}
