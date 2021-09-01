import { JsonpClientBackend } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrObj: any[], searchTerm: string): any {
    if(arrObj){
      return arrObj.filter(x=>{
       return JSON.stringify(x.id).toLowerCase().match(searchTerm.toLocaleLowerCase()) || JSON.stringify(x.metaTitle).toLowerCase().match(searchTerm.toLocaleLowerCase())
      })
    }
    return arrObj
  }
}