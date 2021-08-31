import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeFilter'
})
export class SizeFilterPipe implements PipeTransform {

  transform(value: any[], args: any[]): any{
    console.log(
      value,
      "This issssssss this",
      args
      );

    // if(args.length>0){
    //   return value.map((x:any)=>{
    //     console.log(x.productMetas.map((y:any)=>{
    //       if(y.content == "L"){
    //         return x
    //       }
    //     }));
    //   })
    // }
    return value;
  }

}
