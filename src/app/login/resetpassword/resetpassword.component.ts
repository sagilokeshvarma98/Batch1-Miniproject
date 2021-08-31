import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetForm:FormGroup ;
  constructor(private formBuilder:FormBuilder){
    this.resetForm=this.formBuilder.group({

    }
    )
  }
onSubmit(){
  
}
  ngOnInit(): void {
  }

}
