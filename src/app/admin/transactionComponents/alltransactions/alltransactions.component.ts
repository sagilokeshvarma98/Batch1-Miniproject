import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import * as Xl from "xlsx"

@Component({
  selector: 'app-alltransactions',
  templateUrl: './alltransactions.component.html',
  styleUrls: ['./alltransactions.component.css']
})
export class AlltransactionsComponent implements OnInit {

  constructor(private TS: TransactionsService) { }
  Transactions: any[] = []
  getTransactions() {
    this.TS.getTransactionDetails().subscribe(res => {
      this.Transactions = res.map((x: any, index: any) => {
        if (x.transaction === "failed") {
          x.class = "text text-center table-danger"
          return x
        }
        else {
          x.class = "text text-center table-success"
          return x
        }
      })
    })
  }
  ngOnInit(): void {
    this.getTransactions()
  }

  getFromDate(value: any) {
    let ref = new Date(value.target.value)
    let dateValue = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate(), 0o0, 0o0, 0o0).getTime()
    console.log(dateValue, new Date(1627669800000).toDateString());
    this.Transactions.map((x: any) => {
      if (x.time < dateValue) {
        console.log(x.time, new Date(x.time).toDateString());
      }
    })
  }

  exportexcel() {
    let element = document.getElementById('excel-table');
    const ws: Xl.WorkSheet = Xl.utils.table_to_sheet(element)
    const wb: Xl.WorkBook = Xl.utils.book_new();
    Xl.utils.book_append_sheet(wb, ws, "Sheet1")
    Xl.writeFile(wb, "Transactions.xlsx")
  }
}
