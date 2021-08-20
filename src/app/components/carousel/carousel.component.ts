import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
   providers: [NgbCarouselConfig]
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
