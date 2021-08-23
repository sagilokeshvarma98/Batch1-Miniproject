import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private http:HttpClient) { }




  public postadress(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/adress",data)
  }
    public getadress():Observable<any>{
    return this.http.get("http://localhost:3000/adress")
  }

    
deleteadress(data:any):Observable<any>{
  console.log(data);

  return this.http.delete(`http://localhost:3000/adress/${data}`)
}




}
