import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-kitchen-subpage',
  templateUrl: './kitchen-subpage.component.html',
  styleUrls: ['./kitchen-subpage.component.css']
})
export class KitchenSubpageComponent implements OnInit {

  public kitchenItems:any[] = []

  constructor(private homepageservice: ProductsService) { }
  jwelery: any;
  ab = [
    { 'name': 'containers', 'img': 'assets/Kitchen/home.jpg' },
    { 'name': 'cookware sets', 'img': 'assets/Kitchen/tt.jpg' },
    { 'name': 'choppers', 'img': 'assets/Kitchen/irich.jpg' },
    { 'name': 'Dinner Sets', 'img': 'assets/Kitchen/dinner.webp' },
    { 'name': 'Lunch Box', 'img': 'assets/Kitchen/bl.jpg' },
    { 'name': ' Pressure Cooker', 'img': 'assets/Kitchen/main.jpg' },

  ]

  bt = [
    { 'price': '199', 'img': 'assets/Kitchen/kitchenitem2.jpg' },
    { 'price': '299', 'img': 'assets/Kitchen/kitchen2.jpg' },
    { 'price': '399', 'img': 'assets/Kitchen/kitchenitem1.webp' },


  ]


  kt = [
    { 'price': '199', 'img': 'assets/Kitchen/pex.jpeg' },
    { 'price': '299', 'img': 'assets/Kitchen/bowl.jpg' },
    { 'price': '399', 'img': 'assets/Kitchen/roti.jpg' },


  ]
  ht = [
    { 'img': 'assets/Kitchen/399.jpg' },
    { 'img': 'assets/Kitchen/2.jpg' },
    { 'img': 'assets/Kitchen/3.jpg' },
    { 'img': 'assets/Kitchen/4.jpg' },



  ]
  ts = [
    { 'img': 'assets/Kitchen/1.jpg' },
    { 'img': 'assets/Kitchen/2.jpg' },
    { 'img': 'assets/Kitchen/3.jpg' },
    { 'img': 'assets/Kitchen/4.jpg' },



  ]
  hs = [
    { 'img': 'assets/Kitchen/bo.jpg' },
    { 'img': 'assets/Kitchen/tea cup.jpeg' },
    { 'img': 'assets/Kitchen/sets.jpg' },
    { 'img': 'assets/Kitchen/kitchen4.jpg' },

  ]
  ks = [
    { 'img': 'assets/Kitchen/safe.jpg' },
    { 'img': 'assets/Kitchen/q.jpg' },
    { 'img': 'assets/Kitchen/r.jpg' },
    { 'img': 'assets/Kitchen/s.jpg' },

  ]
  bs = [
    { 'img': 'assets/Kitchen/10.jpg' },
    { 'img': 'assets/Kitchen/20.jpg' },
    { 'img': 'assets/Kitchen/30.jpg' },
    { 'img': 'assets/Kitchen/40.jpg' },

  ]
  cv = [
    { 'img': 'assets/Kitchen/a.jpg' },
    { 'img': 'assets/Kitchen/b.jpg' },
    { 'img': 'assets/Kitchen/a.jpg' },
    { 'img': 'assets/Kitchen/d.jpg' },
  ]
  rs = [
    { 'img': 'assets/Furniture/homefurniture4.jpg' },
    { 'img': 'assets/Furniture/homefurniture5.jpg' },
    { 'img': 'assets/Furniture/homefurniture6.jpg' },
    { 'img': 'assets/Furniture/homefurniture7.jpg' },



  ]
  fg = [
    { 'img': 'assets/Furniture/homefurniture.jpg' },
    { 'img': 'assets/Furniture/homefurniture1.jpg' },
    { 'img': 'assets/Furniture/homefurniture2.jpg' },
    { 'img': 'assets/Furniture/homefurniture3.jpg' },



  ]
  ngOnInit(): void {
    

}
}