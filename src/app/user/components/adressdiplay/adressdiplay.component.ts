import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';


@Component({
  selector: 'app-adressdiplay',
  templateUrl: './adressdiplay.component.html',
  styleUrls: ['./adressdiplay.component.css']
})
export class AdressdiplayComponent implements OnInit {

  userAddress: any
  confirm: any

  constructor(public address: AddressService,private router:Router) { }

  getAddress() {
    this.address.getAddress().subscribe(
      (data)=>{this.userAddress=data}
    )
  }

  ngOnInit(): void {
    this.getAddress();
  }

 deleteAddress(val: any, id: any) {
    this.confirm = confirm("do you want  delet you adress ")
    if (this.confirm == true) {
      this.address.deleteAddress(id).subscribe((posres) => {
        this.getAddress();
      })
    }
  }


}
