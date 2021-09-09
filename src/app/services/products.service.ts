import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hasClassName } from '@ng-bootstrap/ng-bootstrap/util/util';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private hc: HttpClient) { }

  public term = new BehaviorSubject<string>("");

  searchTerm = this.term.asObservable();

  public changeSearchTerm(arg: string) {
    this.term.next(arg)
  }

  productsData():Observable<any>{
     return this.hc.get("http://oshopping.ddns.net/api/products/all")
  }


  searchByTerm(term:any):Observable<any>{
    return this.hc.get("http://oshopping.ddns.net/api/products/search/"+term)
  }

  addProduct(data: any):Observable<any> {
    return this.hc.post("http://oshopping.ddns.net/api/products/add", data)
  }

  addImageByProductId(id:any,obj:any):Observable<any> {
    console.log(id,obj);
    return  this.hc.post(`http://oshopping.ddns.net/api/productimages/${id}/add`,obj)
  }

  getProductbyId(id: number):Observable<any>  {
    return this.hc.get("http://oshopping.ddns.net/api/products/" + id)
  }

}
