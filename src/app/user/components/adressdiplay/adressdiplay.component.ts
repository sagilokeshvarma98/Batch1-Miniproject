import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';



@Component({
  selector: 'app-adressdiplay',
  templateUrl: './adressdiplay.component.html',
  styleUrls: ['./adressdiplay.component.css']
})

export class AdressdiplayComponent implements OnInit {
  d: any
  userAddress: any
  confirm: any
DefaultAddress:any;
  constructor(public address: AddressService, private router: Router) { }

  getAddress() {
    this.address.getAddress().subscribe(
      (data) => {
        console.log("----------", data);
        this.userAddress = data
      this.DefaultAddress=data.addressDefault;
      }
    )
  }

  selctdefault(id: any) {
    
    this.address.selctdefult(id).subscribe((posres) => {
      console.log("this")
      console.log(posres)
      this.getAddress();
    })
    
  }

  public getdefult() {
    this.address.getdefult().subscribe((posres) => {
      this.d = posres;
      console.log("resss")
    })
  }

  ngOnInit(): void {
    this.getAddress();
    this.getdefult();
    this.address.getdefaultadress().subscribe(res=>{
      console.log("somthing here to see");
      console.log(res);
      console.log(res.addressDefault);
      
    })
  }

  deleteAddress(id: any) {
    this.confirm = confirm("do you want  delet you adress ")
    if (this.confirm == true) {
      this.address.deleteAddress(id).subscribe((posres) => {
        console.log("del")
        console.log(posres)
        this.getAddress();
      })
    }
  }
  
}
