import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  constructor(private http:HttpClient) { }

public userdemographics():Observable<any>{
  // return this.http.get("http://localhost:2030/users")
  return this.http.get("http://oshopping.ddns.net/api/user/all")
}
public updatepassword(data:any,id:any):Observable<any>{
  return this.http.patch("http://localhost:3000/users/"+id,data)
}

public recoveraccount():Observable<any>{
  return this.http.get("http://localhost:3000/lostedusers")
}



public accept(data:any):Observable<any>{
  return this.http.post("http://localhost:3000/users/",data)
}

recovered(data:any):Observable<any>{
  console.log(data);

  return this.http.delete(`http://localhost:3000/lostedusers/${data}`)
}

}
