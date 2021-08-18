import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(Transactions: any[], ...args: any[]): any {
    if (args[0][0] && !args[0][1]) {
      return Transactions.filter(x => {
        if (x.time > args[0][0])
          return x
      })
    }
    else if (args[0][1] && !args[0][0]) {
      return Transactions.filter(x => {
        if (x.time < args[0][1])
          return x
      })
    }
    else if (args[0][0] && args[0][1]) {
      return Transactions.filter(x => {
        if (x.time > args[0][0] && x.time < args[0][1])
          return x
      })
    }
    return Transactions
  }

}
