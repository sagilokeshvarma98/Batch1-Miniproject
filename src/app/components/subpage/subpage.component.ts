import { Component} from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.css']
})
export class SubpageComponent {

  constructor(public productsthumbanail:ProductsService) { }

  product:any;
  
}
