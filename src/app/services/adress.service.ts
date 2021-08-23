import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  public postadress(data:any):Observable<any>{
    return this.http.post("http://localhost:3030/adress",data)
  }
    public getadress():Observable<any>{
    return this.http.get("http://localhost:3030/adress")
  }

deleteadress(data:any):Observable<any>{
  console.log(data);
  console.log("delete")

  return this.http.delete(`http://localhost:3000/adress/${data}`)
}

selctdefult(data:any):Observable<any>{
  console.log(data)
  return  this.http.patch("http://localhost:2021/useradress",data)
}

getdefult():Observable<any>{
 
  return  this.http.get("http://localhost:2021/useradress")
}
public getdefaultadress(id:any):Observable<any>{

  
  return this.http.get("http://localhost:3030/adress/"+id)
}

edit(id:any):Observable<any>{
  return this.http.get("http://localhost:3030/adress/"+id)
    }
    putAddress(data: any): Observable<any> {
      return this.http.get("http://localhost:3030/adress/"+data.id,this.httpOptions)
      //     return this.http.put(url+'/'+data.id, data,this.httpOptions)
        }

}
