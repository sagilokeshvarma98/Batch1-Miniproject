import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const url = "http://localhost:5100/address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

   

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  postAddress(data: any): Observable<any> {
    return this.http.post(url, data,this.httpOptions)
  }
  
  putAddress(data: any): Observable<any> {
    return this.http.put(url+'/'+data.id, data,this.httpOptions)
  }
  getAddress(): Observable<any> {
    return this.http.get(url)
  }

  deleteAddress(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`)
  }

  edit(id:any):Observable<any>{
return this.http.get(`${url}/${id}`)
  }

}
