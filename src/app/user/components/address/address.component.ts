import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/services/address.service';
import { UserprofileService } from 'src/app/services/userprofile.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  useraddress: FormGroup;
  submitted: boolean = false;
  userId:any
  constructor(private fb: FormBuilder,private user:UserprofileService, private adressservice: AddressService, private route: Router, private toastr: ToastrService, @Inject(ActivatedRoute) private _activatedroute: ActivatedRoute) {

    this.useraddress = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        line1: ['', [Validators.required, Validators.maxLength(300)]],
        line2: ['', [Validators.required, Validators.maxLength(300)]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        district: ['', [Validators.required]],
        mobile: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
        addressType: ['', [Validators.required]],
        //addressDefault:['',[]],
        //   fullName:['',[Validators.required,Validators.minLength(3)]],
        //  flat :['',[Validators.required,Validators.minLength(3)]],
        //   mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        //   area:['',[Validators.required]],
        //   town: ['', [Validators.required]],
        //   district:['',[Validators.required]],
        //   state :['',[Validators.required]],
        //   pincode:['',[Validators.required]],
        //   addressType:['',[Validators.required]]

      }
    )

  }

  onSubmit() {
    this.submitted = true;
    // this.useraddress("addressDefault")
    let userData = {
      ...this.useraddress.value
    }
    console.log(this.useraddress);
    userData.addressDefault = 0;
   
    console.log("wnekfhwbknefbkwrhf");
    


    if(userData.id!=undefined && userData.id!=0 && userData.id!=null){
      this.adressservice.putAddress(userData)
      .subscribe((res:any)=>{
       this.useraddress.reset();
        this.route.navigate(['useradress']);
        this.toastr.success("Address updated successfully.", "Success")
      })
    }else{
      this.adressservice .postAddress(userData,this.userId.id)
      .subscribe((res:any)=>{
       this.useraddress.reset();
        this.route.navigate(['useradress']);
        this.toastr.success("Address saved successfully.", "Success")
      })
    }

  }
  get adressFormControl() {
    return this.useraddress.controls;
  }
  ngOnInit(): void {
this.user.userprofile().subscribe((posres)=>{
  this.userId=posres;
  console.log(this.userId);
  console.log(this.userId.id)
  
})
    
    this.getAdress();
    
  }
  getAdress(): void {
    
    const id = Number(this._activatedroute.snapshot.paramMap.get('id'));
    
    if (id != 0) {
      this.adressservice.edit(id)
        .subscribe(res => {
          this.useraddress = this.fb.group(
            {
              id: res.id,
              fullName: res.fullName,
              line1: res.line1,
              line2: res.line2,
              city: res.city,
              state: res.state,
              district: res.district,
              mobile: res.mobile,
              pincode: res.pincode,
              addressType: res.addressType,
            }
          )
        });
    }

  }

}
