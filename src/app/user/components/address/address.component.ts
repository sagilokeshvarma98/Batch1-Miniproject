import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  useradress:FormGroup; 
  submitted:boolean= false;
  constructor(private fb:FormBuilder, private adressservice:AdressService , public route:Router) { 

  this.useradress=this.fb.group(
    {
      fullName:['',[Validators.required,Validators.minLength(3)]],
     flat :['',[Validators.required,Validators.minLength(3)]],
    
      mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      area:['',[Validators.required]],
      town: ['', [Validators.required]],
      Landmark:['',[Validators.required]]

    }
  )
  
  }

  onSubmit(){
    this.submitted = true;
    let userData = {
      ...this.useradress.value,
  
    }
   this.adressservice.postadress(userData)
   .subscribe((res:any)=>{
     console.log(res);
     this.route.navigate(['/useradress'])
   })
  }
  get adressFormControl() {
    return this.useradress.controls;
  }




  
  ngOnInit(): void {
  }

}
