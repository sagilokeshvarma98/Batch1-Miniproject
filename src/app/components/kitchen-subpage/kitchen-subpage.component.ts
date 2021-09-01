import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-kitchen-subpage',
  templateUrl: './kitchen-subpage.component.html',
  styleUrls: ['./kitchen-subpage.component.css']
})
export class KitchenSubpageComponent implements OnInit {

  constructor(private homepageservice:ProductsService) { }
jwelery:any;
ab=[
  {'price':'containers','img3':'assets/Kitchen/containers.jpg'},
  { 'price':'cookware sets','img3':'assets/Kitchen/cookware sets.jpg'},
  { 'price':'choppers','img3':'assets/Kitchen/choppers.jpg'},
  { 'price':'Dinner Sets','img3':'assets/Kitchen/dinner sets.jpg'},
  { 'price':'Lunch Box','img3':'assets/Kitchen/lunch box.jpg'},
  { 'price':'  Pressure Cooker','img3':'assets/Kitchen/cooker.jpg'},
  
  
 
 
  

]

bt=[
  {'price':'199','img':'assets/Kitchen/rice.jpg'},
  {'price':'299','img':'assets/Kitchen/srk.jpg'},
  {'price':'399','img':'assets/Kitchen/plastic.png'},
  

]


kt=[
  {'price':'199','img':'assets/Kitchen/dark.jpg'},
  {'price':'299','img':'assets/Kitchen/apple.jpg'},
  {'price':'399','img':'assets/Kitchen/famous.jpg'},
  

]
ht=[
  {'img2':'assets/Kitchen/1.jpg'},
  {'img2':'assets/Kitchen/2.jpg'},
  {'img2':'assets/Kitchen/3.jpg'},
  {'img2':'assets/Kitchen/4.jpg'},
  
  
  
]
ts=[
  {'img':'assets/Kitchen/1.jpg'},
  {'img':'assets/Kitchen/2.jpg'},
  {'img':'assets/Kitchen/3.jpg'},
  {'img':'assets/Kitchen/4.jpg'},
  
  
  
]
hs=[
  {'img':'assets/Kitchen/set.jpg'},
  {'img':'assets/Kitchen/water.jpg'},
  {'img':'assets/Kitchen/tea.jpg'},
  {'img':'assets/Kitchen/glasses.jpg'},
  
  
  
]
  ngOnInit(): void {
    

    // this.homepageservice.productsData().subscribe((posres)=>{
  
    //   this.jwelery=posres;
      
    //   })
  }

}
