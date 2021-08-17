import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carousel = [
    { 'img': 'assets/carousel/baner1.jpg' },
    { 'img': 'assets/carousel/baner2.jpg' },
    { 'img': 'assets/carousel/baner3.jpg' },
    { 'img': 'assets/carousel/baner4.jpg' }
  ]
  constructor() { }

  ngOnInit() { }

}
