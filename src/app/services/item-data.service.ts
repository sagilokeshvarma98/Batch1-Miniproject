import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor() { }

  getDataOfItem(data:any){
    sessionStorage.setItem("itemData",data)
  }
}
