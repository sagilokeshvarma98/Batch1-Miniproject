import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-mens-subpage',
  templateUrl: './mens-subpage.component.html',
  styleUrls: ['./mens-subpage.component.css']
})
export class MensSubpageComponent implements OnInit {

  public mensWear:any [] = []

  mens: any;
  mens1 = [
    { 'name': 'T-shirts', 'img': 'assets/Mens/m1.jpg' },
    { 'name': 'Jeans', 'img': 'assets/Mens/m2.jpg' },
    { 'name': 'Casual Shirts', 'img': 'assets/Mens/m3.jpg' },
    { 'name': 'Formal Shirts', 'img': 'assets/Mens/m4.jpg' },
    { 'name': 'Winter  Ware', 'img': 'assets/Mens/m5.jpg' },
    { 'name': 'Ethnic Ware', 'img': 'assets/Mens/m6.jpg' },
    { 'name': 'Inner Ware', 'img': 'assets/Mens/m7.jpg' },
    { 'name': 'Formal Shirts', 'img': 'assets/Mens/m18.jpg' },
    { 'name': 'Jacket', 'img': 'assets/Mens/m19.jpg' },
    { 'name': 'Odoky', 'img': 'assets/Mens/m20.jpg' },
  ]
  mens2 = [
    { 'name': 'MIN .40% OFF', 'img': 'assets/Mens/m10.jpg' },
    { 'name': 'MIN .50% OFF', 'img': 'assets/Mens/m11.jpg' },
    { 'name': 'MIN .40% OFF', 'img': 'assets/Mens/m12.jpg' },
    { 'name': 'MIN .70% OFF', 'img': 'assets/Mens/m13.jpg' },
    { 'name': 'MIN .50% OFF', 'img': 'assets/Mens/m14.jpg' },
    { 'name': 'MIN .55% OFF', 'img': 'assets/Mens/m15.jpg' },
    { 'name': 'MIN .50% OFF', 'img': 'assets/Mens/m16.jpg' },
    { 'name': 'MIN .70% OFF', 'img': 'assets/Mens/m17.jpg' },
  ]
  mens3 = [
    { 'title': 'FORMAL', 'name': 'START @ 299', 'img': 'assets/Mens/m21.jpg' },
    { 'title': 'CASUAL', 'name': 'UPTO 70% OFF', 'img': 'assets/Mens/m22.jpg' },
    { 'title': 'FESTIVE', 'name': 'UPTO 70% OFF', 'img': 'assets/Mens/m23.jpg' },
    { 'title': 'WINTER WEAR', 'name': 'MIN .70%OFF', 'img': 'assets/Mens/m24.jpg' },
  ]

  constructor(private homepageservice: ProductsService) { }

  ngOnInit(): void {
    this.homepageservice.productsData().subscribe(res=>{
      res.map((x:any)=>{
        if(x.subCategory == "Men's wear")
          this.mensWear.push(x)
      })
      console.log(this.mensWear);
    })
  }
}
