import { Component} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
   providers: [NgbCarouselConfig]
})
export class CarouselComponent {

  
  constructor() { }

}
