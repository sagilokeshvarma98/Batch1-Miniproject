import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-electronics-subpage',
  templateUrl: './electronics-subpage.component.html',
  styleUrls: ['./electronics-subpage.component.css']
})
export class ElectronicsSubpageComponent implements OnInit {

  mens1 = [
    {'img': 'assets/electronics/e1.png' ,'link':'/products/t-shirt'},
    { 'img':'assets/electronics/e2.jpg','link':'/products/jeans' },
    { 'img': 'assets/electronics/e3.png','link':'/products/casual' },
    { 'img':'assets/electronics/e4.jpg','link':'/products/formal' },
  ]
  
  mens2 = [
    { 'name':'DELL','img': 'assets/electronics/e14.jpg' },
    { 'name':'HP', 'img': 'assets/electronics/e15.jpg' },
    { 'name':'ACER', 'img': 'assets/electronics/e16.jpg' },
    { 'name':'LENOVO','img': 'assets/electronics/e17.jpg' },
  ]
  mens3 = [
    { 'title': 'SAMSUNG',  'img': 'assets/electronics/e9.webp','link':'/products/formal' },
    { 'title': 'XIAOMI mi', 'img': 'assets/electronics/e10.webp','link':'/products/casual' },
    { 'title': 'I PHONE', 'img': 'assets/electronics/e11.webp','link':'/products/festive' },
    { 'title': 'VIVO', 'img': 'assets/electronics/e12.webp','link':'/products/jacket' },
  ]
 

  constructor(private homepageservice: ProductsService) { }
  electronics: any;
  ngOnInit(): void {



  }

}
