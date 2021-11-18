import { Component} from '@angular/core';

// import {trigger , transition , state , style , animate} from '@angular/animations'

@Component({
  selector: 'app-transaction-home',
  templateUrl: './transaction-home.component.html',
  styleUrls: ['./transaction-home.component.css'],
  animations: [
    // trigger('simpleFadeAnimation', [

    //   // the "in" style determines the "resting" state of the element when it is visible.
    //   state('in', style({opacity: 1 , display : "contents"})),

    //   // fade in when created. this could also be written as transition('void => *')
    //   transition(':enter', [
    //     style({opacity: 0 , display : "none"}),
    //     animate(600 )
    //   ]),

    //   // fade out when destroyed. this could also be written as transition('void => *')
    //   transition(':leave',
    //     animate(600, style({opacity: 0, display : "contents"})))
    // ])
    // ,
    // trigger('anchorsAnimate', [
    //   state('inactive', style({
    //     display : "none"
    //    })),
    //   state('active', style({
    //     display : "contents"
    //    })),
    //   transition('inactive => active', animate('100ms ease-in')),
    //   transition('active => inactive', animate('100ms ease-out'))
    // ])
  ]
})
export class TransactionHomeComponent {

  // state: String = 'some'
  constructor() {}
  public hideShowLinks : boolean = false
  toggleState() {
    this.hideShowLinks = !this.hideShowLinks
  //   this.state = "simpleFadeAnimation"
  //   this.state = this.state === 'active' ? 'inactive' : 'active'
  }

}
