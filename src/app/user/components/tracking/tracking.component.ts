import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  step_1: string = "step";
  step_2: string = "step";
  step_3: string = "step";
  step_4: string = "step";
  step_5: string = "step";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.step_1 = 'step active'
    }, 1000);
    setTimeout(() => {
      this.step_2 = 'step active'
    }, 3000);
    setTimeout(() => {
      this.step_3 = 'step active'
    }, 5000);
    setTimeout(() => {
      this.step_4 = 'step active'
    }, 7000);
    setTimeout(() => {
      this.step_4 = 'step active'
    }, 9000);
  }

}
