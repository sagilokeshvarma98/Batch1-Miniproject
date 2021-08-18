import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {

  constructor(private os:CartService) { }

  @Input() itemData:any
  @Output() displayNotification = new EventEmitter()

  ngOnInit(): void {
  }
getitem(){
  this.os.getitem().subscribe((posres)=>{
    console.log(posres)
  })
}




  AddToCart(){
    console.log(this.itemData);

this.os.additem(this.itemData).subscribe((posres)=>{
  console.log(posres)
  this.getitem();
  this.os.changeData();
})



   
    this.displayNotification.emit('true')
  }

}
