import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { AngmaterialModule } from 'src/app/angmaterial/angmaterial.module';


import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter();

  constructor(public obj:LoginService) { }
 
  onToggleClose() {
    this.closeSideNav.emit();}

  ngOnInit() {

 

  }

}
