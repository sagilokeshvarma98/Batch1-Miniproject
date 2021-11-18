import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-pending-cancellation',
  templateUrl: './pending-cancellation.component.html',
  styleUrls: ['./pending-cancellation.component.css']
})
export class PendingCancellationComponent implements OnInit {

 
  constructor(private TS:TransactionsService) { }
  Transactions:any[] = []
  getTransactions() {
  this.TS.getPendingTransactions().subscribe(res=>this.Transactions = res)
  }

  ngOnInit(): void {
    this.getTransactions()
  }

  approveRequest(element:any) {
   let bool = confirm("Do you want to approve this request?")
   if(bool === true) {
     element.transaction = "failed"
     this.TS.deleteRequest(element).subscribe(res=>{
       this.TS.cancelTransaction(element).subscribe(res=>{
        this.getTransactions()
         console.log(res,"deleted and posted");
       })
     })
   }
  }

}
