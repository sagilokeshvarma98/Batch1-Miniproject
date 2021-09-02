import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womens-subpage',
  templateUrl: './womens-subpage.component.html',
  styleUrls: ['./womens-subpage.component.css']
})
export class WomensSubpageComponent implements OnInit {

  mens1 = [
    { 'name': 'Sarees', 'img': 'assets/Women/w1.jpg' },
    { 'name': 'Dreem Material', 'img': 'assets/Women/w2.jpg' },
    { 'name': 'Kuris', 'img':'assets/Women/w3.jpg' },
    { 'name': 'Designer sarees', 'img':'assets/Women/w4.jpg' },
    { 'name': 'Lehenges', 'img':'assets/Women/w5.jpg' },
    { 'name': 'Patials ', 'img': 'assets/Women/w6.jpg' },
    { 'name': 'Leggings', 'img': 'assets/Women/w7.jpg' },
    { 'name': 'Inner Ware', 'img': 'assets/Women/w8.jpg' },
    { 'name': 'Formal Shirts', 'img': 'assets/Women/w9.jpg' },
    { 'name': 'Jacket', 'img': 'assets/Women/w10.jpg' },
   
  ]
  mens2 = [
    { 'name': 'MIN .40% OFF', 'img':'assets/Women/w13.jpg'  },
    { 'name': 'MIN .50% OFF', 'img':'assets/Women/w14.jpg'  },
    { 'name': 'MIN .60% OFF', 'img':'assets/Women/w15.jpg'  },
    { 'name': 'MIN .70% OFF', 'img':'assets/Women/w16.jpg'  },
    
  ]
  mens3 = [
    { 'title': 'GEORGETTS',  'img': 'assets/Women/w17.jpg' },
    { 'title': 'NETS & LACES', 'img':'assets/Women/w18.jpg' },
    { 'title': 'COTTEN', 'img': 'assets/Women/w19.jpg' },
    { 'title': 'SILK',  'img': 'assets/Women/w20.jpg' },
  ]
  constructor() { }

  ngOnInit(): void {

  }


}
