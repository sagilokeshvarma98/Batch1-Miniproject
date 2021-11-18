import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http:HttpClient) { }

  getTransactionDetails():Observable<any> {
    return this.http.get("http://localhost:3000/transactions")
  }

  updateProgress(data:any):Observable<any> {
    console.log(data);
    return this.http.put(`http://localhost:3000/transactions/${data.id}`,data)
  }

  getPendingTransactions():Observable<any> {
    return this.http.get("http://localhost:3000/pending")
  }
  
  cancelTransaction(data:any) {
    return this.http.post(`http://localhost:3000/transactions`,data)
  }

  deleteRequest(data:any) {
    return this.http.delete(`http://localhost:3000/pending/${data.id}`)
  }
}
