import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(public http :HttpClient) { }

public userprofile(){
  return this.http.get("http://oshopping.ddns.net/api/user/profile")
}

public deactivate(data:any):Observable<any>{
  return this.http.post("http://localhost:2030/users",data)
}
deleteaccount():Observable<any>{
  console.log("deletd");

  return this.http.delete("http://oshopping.ddns.net/api/user/profile/delete")
}


}
