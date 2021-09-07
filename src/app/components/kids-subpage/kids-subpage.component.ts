import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids-subpage',
  templateUrl: './kids-subpage.component.html',
  styleUrls: ['./kids-subpage.component.css']
})
export class KidsSubpageComponent implements OnInit {

  Kids1 = [
    { 'name': 'MIN .40% OFF', 'img': 'assets/Kids/k3.jpg' },
    { 'name': 'MIN .50% OFF', 'img': 'assets/Kids/k4.jpg' },
    { 'name': 'MIN .55% OFF', 'img': 'assets/Kids/k5.jpg' },
    { 'name': 'MIN .60% OFF', 'img': 'assets/Kids/k6.jpg' },
    { 'name': 'MIN .40% OFF', 'img': 'assets/Kids/k21.jpg' },
    { 'name': 'MIN .45% OFF', 'img': 'assets/Kids/k22.jpg' },
    { 'name': 'MIN .55% OFF', 'img': 'assets/Kids/k23.jpg' },
    { 'name': 'MIN .60% OFF', 'img': 'assets/Kids/k24.jpg' },

  ]
 
  Kids2 = [
    { 'img': 'assets/Kids/k7.jpg' },
    { 'img': 'assets/Kids/k8.jpg' },
    { 'img': 'assets/Kids/k9.jpg' },
    { 'img': 'assets/Kids/k10.jpg' },
    { 'img': 'assets/Kids/k11.jpg' },
    { 'img': 'assets/Kids/k12.jpg' },
  ]
  Kids3 = [
    { 'title': 'PARTY WEAR', 'img': 'assets/Kids/k13.jpg' },
    { 'title': 'CASUAL WEAR',  'img': 'assets/Kids/k14.jpg' },
    { 'title': 'TRADITIONAL WEAR', 'img': 'assets/Kids/k15.jpg' },
    { 'title': 'EVERYDAY WEAR', 'img': 'assets/Kids/k16.jpg' },

  ]
  constructor() { }

  ngOnInit(): void {

  }


}
