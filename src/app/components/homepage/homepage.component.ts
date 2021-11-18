import { Component} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private homepageservice:ProductsService) { }
mens:any;
elctronics:any;
jwelery:any;
showFiller = false;
sidenavWidth = 1;
  ngStyle: string | undefined;

isShown: boolean = false ; // hidden by default
public toggleShow() {
    
  this.isShown =  this.isShown;
  
  }


  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }

  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }


}
