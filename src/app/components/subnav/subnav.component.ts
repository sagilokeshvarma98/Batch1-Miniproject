import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css']
})
export class SubnavComponent implements OnInit {
  @Output() SideNavToggle = new EventEmitter();  
  constructor() { }
  openSidenav() {
    this.SideNavToggle.emit();
 }
  ngOnInit(): void {
  }

}
