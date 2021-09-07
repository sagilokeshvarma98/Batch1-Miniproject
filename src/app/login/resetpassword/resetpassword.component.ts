import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetForm:FormGroup ;
  constructor(private formBuilder:FormBuilder , private route:Router){
    this.resetForm=this.formBuilder.group({

    }
    )
  }
onSubmit(){
  
}

  public token : string = ""

  ngOnInit(): void {
    let urlArr = this.route.url.split('=')
    this.token = urlArr[1]
    console.log("token is" , this.token);
  }

}
