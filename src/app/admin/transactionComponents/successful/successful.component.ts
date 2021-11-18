import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent implements OnInit {

  constructor(private TS:TransactionsService) { }
  Transactions:any[] = []
  getTransactions() {
  this.TS.getTransactionDetails().subscribe(res=>{
    this.Transactions =  []
     res.map((x:any,index:any)=>{
        if(x.transaction==="success" && x.progress!=="Delivered") {
          this.Transactions.push(x)
        }
      })      
    })
  }

  ngOnInit(): void {
    this.getTransactions()
  }

  changeProgress(value:any,element:any) {
    if(value!="none") {
      element.progress = value
    this.TS.updateProgress(element).subscribe(()=>{
      this.getTransactions()
    })
    }
  }

}
