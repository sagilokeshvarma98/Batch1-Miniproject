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

  constructor(public address: AddressService, private router: Router) { }

  getAddress() {
<<<<<<< HEAD
    this.address.getadress().subscribe(
      (data) => { this.userAddress = data }
=======
    this.address.getAddress().subscribe(
    // this.address.getAddress().subscribe(

     (data)=>{
       
       console.log("----------",data);
       this.userAddress=data
      
      }
>>>>>>> c725099fa12a99154c1f550053941bf0b0f5d4f5
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
<<<<<<< HEAD
  public getdefult() {
    this.address.getdefult().subscribe((posres) => {
      this.d = posres;
      console.log("resss")
      console.log(this.d)
    })
  }
=======
public getdefult(){

  this.address.getdefult().subscribe((posres)=>{
    this.d=posres;
    console.log("resss")
    //console.log(this.d)
  })
}

>>>>>>> c725099fa12a99154c1f550053941bf0b0f5d4f5
  ngOnInit(): void {
    this.getAddress();
    this.getdefult();
    
  }
<<<<<<< HEAD
  deleteAddress(val: any, id: any) {
=======
 deleteAddress(id:any) {
>>>>>>> c725099fa12a99154c1f550053941bf0b0f5d4f5
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
