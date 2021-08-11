import { Component, OnInit } from '@angular/core';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-adressdiplay',
  templateUrl: './adressdiplay.component.html',
  styleUrls: ['./adressdiplay.component.css']
})
export class AdressdiplayComponent implements OnInit {

  useradress:any
  confirm:any
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
  
  
    ngOnInit(): void {
  this.getadress();
  
  
    }

}
