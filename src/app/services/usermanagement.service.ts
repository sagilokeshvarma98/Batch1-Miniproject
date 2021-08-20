import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  constructor(private http:HttpClient) { }

public userdemographics():Observable<any>{
  return this.http.get("http://localhost:2030/users")
}
public updatepassword(data:any,id:any):Observable<any>{
  return this.http.patch("http://localhost:2030/users/"+id,data)
}

public recoveraccount():Observable<any>{
  return this.http.get("http://localhost:9090/lostedusers")
}



public accept(data:any):Observable<any>{
  return this.http.post("http://localhost:2030/users/",data)
}

recovered(data:any):Observable<any>{
  console.log(data);

  return this.http.delete(`http://localhost:9090/lostedusers/${data}`)
}

}
