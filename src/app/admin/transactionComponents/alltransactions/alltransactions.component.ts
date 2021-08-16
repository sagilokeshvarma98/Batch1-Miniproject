import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-alltransactions',
  templateUrl: './alltransactions.component.html',
  styleUrls: ['./alltransactions.component.css']
})
export class AlltransactionsComponent implements OnInit {

  constructor(private TS:TransactionsService) { }
  Transactions:any[] = []
  getTransactions(){
  this.TS.getTransactionDetails().subscribe(res=>{
    this.Transactions =  res.map((x:any,index:any)=>{
        if(x.transaction==="failed"){
          x.class = "text text-center table-danger"
          return x
        }
        else{
          x.class = "text text-center table-success"
          return x
        }
      })      
    })
  }
  ngOnInit(): void {
    this.getTransactions()
  }
}
