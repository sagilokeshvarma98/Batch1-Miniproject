import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  @Input() trackId:number = 0

  step_1: string = "step";
  step_2: string = "step";
  step_3: string = "step";
  step_4: string = "step";
  step_5: string = "step";

  constructor() { }

  ngOnInit(): void {
  }
}
