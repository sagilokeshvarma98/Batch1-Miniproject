import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-payment-gate',
  templateUrl: './payment-gate.component.html',
  styleUrls: ['./payment-gate.component.css']
})
export class PaymentGateComponent implements OnInit {











token:any
  checkoutForm:FormGroup


  constructor(private fb:FormBuilder,private cs:CheckoutService) {

    this.checkoutForm=this.fb.group(
      {
        cardNumber:['',[Validators.required,Validators.minLength(16),Validators.minLength(16)]],
        expMonth:['',[Validators.required]],
        expYear:['',[Validators.required,Validators.minLength(4),Validators.minLength(4)]],
        cvc:['',[Validators.required,Validators.minLength(3),Validators.minLength(3)]],
        

      }
    )
   }
  
getstripetoken(){
this.token=  (<any>window).Stripe.card.getToken(this.checkoutForm.value);
console.log("this is token ");
console.log(this.token);
  this.cs.stripetoken(this.token).subscribe((res)=>{
this.token=res.id
console.log("this is token ");
console.log(res);
console.log("this is token id");
console.log(res.id);
  
  })
}

   
  onSubmit(){
    
    let carddata = {
      ...this.checkoutForm.value,
      
    }

this.getstripetoken();



  }

  get checkoutFormcontrol() {
    return this.checkoutForm.controls;
  }
  ngOnInit(): void {
  }

}
