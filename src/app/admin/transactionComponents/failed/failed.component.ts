import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.css']
})
export class FailedComponent implements OnInit {

  constructor(private TS:TransactionsService) { }
  Transactions:any[] = []
  getTransactions() {
  this.TS.getTransactionDetails().subscribe(res=>{
    this.Transactions =  []
     res.map((x:any,index:any)=>{
        if(x.transaction==="failed") {
          this.Transactions.push(x)
        }
      })      
    })
  }

  ngOnInit(): void {
    this.getTransactions()
  }

}
