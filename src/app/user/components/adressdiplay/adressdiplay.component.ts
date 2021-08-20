import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-adressdiplay',
  templateUrl: './adressdiplay.component.html',
  styleUrls: ['./adressdiplay.component.css']
})
export class AdressdiplayComponent implements OnInit {

  useradress:any
  confirm:any
  d:any
    constructor(public service:AdressService) { }
  
  deleteadress(val:any,id:any){
    
    this.confirm = confirm("do you want  delet you adress ")
    if (this.confirm == true) {
  
      this.service.deleteadress(id).subscribe((posres) => {
        console.log(posres)
        
        this.getadress();
  
  
      })
  
  }
  }






  getadress(){
    this.service.getadress().subscribe((res)=>{
      this.useradress=res;
      
    })
  }
  


  selctdefault(val:any,id:any){
  
    let defult={
      "default":id
  }
    this.service.selctdefult(defult).subscribe((posres)=>{
      console.log("this")
      console.log(posres)
      
    })

  }
public getdefult(){

  this.service.getdefult().subscribe((posres)=>{
    this.d=posres;
    console.log("resss")
    console.log(this.d)
  })
}


  
    ngOnInit(): void {
  this.getadress();
  this.getdefult();
  
  
    }

}
