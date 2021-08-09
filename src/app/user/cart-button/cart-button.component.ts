import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {

  constructor() { }

  @Input() itemData:any
  @Output() displayNotification = new EventEmitter()

  ngOnInit(): void {
  }

  AddToCart(){
    console.log(this.itemData);
    this.displayNotification.emit('true')
  }

}
