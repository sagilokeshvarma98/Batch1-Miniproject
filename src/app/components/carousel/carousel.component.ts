import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carousel = [
    { 'img': 'assets\corosal\baner1.jpg' },
    { 'img': 'assets\corosal\baner2.jpg' },
    { 'img': 'assets\corosal\baner3.jpg' },
    { 'img': 'assets\corosal\baner4.jpg' }
  ]
  
  constructor() { }

  ngOnInit() { }

}
