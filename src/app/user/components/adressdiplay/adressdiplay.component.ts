import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdressService } from 'src/app/services/address.service';
import { AddressService } from 'src/app/services/adress.service';


@Component({
  selector: 'app-adressdiplay',
  templateUrl: './adressdiplay.component.html',
  styleUrls: ['./adressdiplay.component.css']
})

export class AdressdiplayComponent implements OnInit {
  d: any
  userAddress: any
  confirm: any

  constructor(public address: AddressService, private router: Router) { }

  getAddress() {
    this.address.getadress().subscribe(
      (data) => { this.userAddress = data }
    )
  }
  selctdefault(val: any, id: any) {
    let defult = {
      "default": id
    }
    this.address.selctdefult(defult).subscribe((posres) => {
      console.log("this")
      console.log(posres)
    })
  }
  public getdefult() {
    this.address.getdefult().subscribe((posres) => {
      this.d = posres;
      console.log("resss")
      console.log(this.d)
    })
  }
  ngOnInit(): void {
    this.getAddress();
    this.getdefult();
  }
  deleteAddress(val: any, id: any) {
    this.confirm = confirm("do you want  delet you adress ")
    if (this.confirm == true) {
      this.address.deleteadress(id).subscribe((posres) => {
        console.log("del")
        console.log(posres)
        this.getAddress();
      })
    }
  }
}
