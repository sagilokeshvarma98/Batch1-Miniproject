import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  url = "http://localhost:3000/address";
  
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

postAddress(data:any,id:any): Observable<any> {
   // return this.http.post(this.url, data,this.httpOptions)
   return this.http.post("http://oshopping.ddns.net/api/useraddress/user/add",data);
   }
 getAddress(): Observable<any> {
     return this.http.get("http://oshopping.ddns.net/api/useraddress/user")
    //return this.http.get(this.url);
  }
deleteAddress(id: any): Observable<any> {
   return this.http.delete("http://oshopping.ddns.net/api/useraddress/"+id)
   }
edit(id:any):Observable<any>{
return this.http.get("http://oshopping.ddns.net/api/useraddress/"+id)
   }
 putAddress(data: any): Observable<any> {
    return this.http.put("http://oshopping.ddns.net/api/useraddress/user/"+data.id, data)
   }

selctdefult(data:any):Observable<any>{
  console.log(data)
  return  this.http.patch("http://localhost:3000/useradress",data)
}
getdefult():Observable<any>{
 
  return  this.http.get("http://localhost:3000/useradress")
}
 getdefaultadress(id:any):Observable<any>{
  
  return this.http.get("http://localhost:3000/address/"+id)
}
}
