import { Component } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-kitchen-subpage',
  templateUrl: './kitchen-subpage.component.html',
  styleUrls: ['./kitchen-subpage.component.css']
})
export class KitchenSubpageComponent  {

  public kitchenItems:any[] = []

  constructor(private homepageservice: ProductsService) { }
  jwelery: any;
  ab = [
    { 'name': 'containers', 'img': 'assets/Kitchen/containers.jpg' },
    { 'name': 'cookware sets', 'img': 'assets/Kitchen/cookware sets.jpg' },
    { 'name': 'choppers', 'img': 'assets/Kitchen/choppers.jpg' },
    { 'name': 'Dinner Sets', 'img': 'assets/Kitchen/dinner sets.jpg' },
    { 'name': 'Lunch Box', 'img': 'assets/Kitchen/lunch box.jpg' },
    { 'name': ' Pressure Cooker', 'img': 'assets/Kitchen/cooker.jpg' },

  ]

  bt = [
    { 'price': '199', 'img': 'assets/Kitchen/rice.jpg' },
    { 'price': '299', 'img': 'assets/Kitchen/srk.jpg' },
    { 'price': '399', 'img': 'assets/Kitchen/plastic.png' },


  ]


  kt = [
    { 'price': '199', 'img': 'assets/Kitchen/dark.jpg' },
    { 'price': '299', 'img': 'assets/Kitchen/apple.jpg' },
    { 'price': '399', 'img': 'assets/Kitchen/famous.jpg' },


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
    { 'img': 'assets/Kitchen/set.png' },
    { 'img': 'assets/Kitchen/water.png' },
    { 'img': 'assets/Kitchen/tea.jpg' },
    { 'img': 'assets/Kitchen/glasses.jpg' },

  ]

  ks = [
    { 'img': 'assets/Kitchen/p.jpg' },
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
}