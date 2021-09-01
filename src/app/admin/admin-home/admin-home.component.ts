import { Component, Input, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { UsermanagementService } from 'src/app/services/usermanagement.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  Transactions: any[] = []

 
  constructor(private transaction:TransactionsService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transaction.getTransactionDetails().subscribe(res => {
      this.Transactions = res.map((x: any, index: any) => {
        x.date = new Date(parseInt(x.time)).toDateString()
        if (x.transaction === "failed") {
          x.class = "text text-center table-danger"
          return x
        }
        else {
          x.class = "text text-center table-success"
          return x
        }
      })
    }
    )
  }
  

}