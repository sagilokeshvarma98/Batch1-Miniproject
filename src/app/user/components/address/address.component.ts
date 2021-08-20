import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {Inject} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  useradress:FormGroup; 
  submitted:boolean= false;
  constructor(private fb:FormBuilder, private adressservice:AddressService , private route:Router,private toastr: ToastrService, @Inject(ActivatedRoute) private _activatedroute : ActivatedRoute) { 

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
    if(userData.id!=undefined && userData.id!=0 && userData.id!=null){
      this.adressservice.putAddress(userData)
      .subscribe((res:any)=>{
       this.useradress.reset();
        this.route.navigate(['useradress']);
        this.toastr.success("Coupons are updated successfully.", "Success")
      })
    }else{
      this.adressservice.postAddress(userData)
      .subscribe((res:any)=>{
       this.useradress.reset();
        this.route.navigate(['useradress']);
        this.toastr.success("Coupons are saved successfully.", "Success")
      })
    }
  
  }
  
  get adressFormControl() {
    return this.useradress.controls;
  }




  
  ngOnInit(): void {

    this.getAdress();
  }

  getAdress(): void {
    const id = Number(this._activatedroute.snapshot.paramMap.get('id'));

    if(id!=0){
      this.adressservice.edit(id)
      .subscribe(res=>{
      this.useradress=this.fb.group(
        {
          id:res.id,
          fullName:res.fullName,
          flat:res.flat,
          mobile:res.mobile,
          area:res.area,
          town:res.town,
          Landmark:res.Landmark,
        }
      )
      });
    }
  
  }

}
