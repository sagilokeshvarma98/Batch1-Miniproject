import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { CheckoutService } from 'src/app/services/checkout.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-payment-gate',
  templateUrl: './payment-gate.component.html',
  styleUrls: ['./payment-gate.component.css']
})
export class PaymentGateComponent implements OnInit {

  card_data: any
  token: any
  checkoutForm: FormGroup
  constructor(private fb: FormBuilder, private cs: CheckoutService , public ls:LoginService) {

    this.checkoutForm = this.fb.group(
      {
        Number: ['', [Validators.required, Validators.minLength(16), Validators.minLength(16)]],
        expMonth: ['', [Validators.required]],
        expYear: ['', [Validators.required, Validators.minLength(4), Validators.minLength(4)]],
        cvc: ['', [Validators.required, Validators.minLength(3), Validators.minLength(3)]],
      }
    )
  }

  createToken() {
    (<any>window).Stripe.card.createToken(this.card_data, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        this.payment(response.id)
        console.log("success");
        console.log(token);
        console.log(response);
      } else {
        console.log(response.error.message);
      }
    });
  }

  payment(id:any){
    localStorage.setItem("stripetoken",id)
    this.ls.paymentGateway().subscribe(res=>console.log(res))
  }

  onSubmit() {
    this.card_data = {
      number: this.checkoutForm.value.Number,
      exp_month: this.checkoutForm.value.expMonth,
      exp_year: this.checkoutForm.value.expYear,
      cvc: this.checkoutForm.value.cvc,
    }
    this.createToken()
  }
  get checkoutFormcontrol() {
    return this.checkoutForm.controls;
  }
  ngOnInit(): void {
  }

}
