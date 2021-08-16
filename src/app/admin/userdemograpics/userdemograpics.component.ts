import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '../services/usermanagement.service';

@Component({
  selector: 'app-userdemograpics',
  templateUrl: './userdemograpics.component.html',
  styleUrls: ['./userdemograpics.component.css']
})
export class UserdemograpicsComponent implements OnInit {
userdemographics:any
userdemo:any=true;
  constructor(private ud:UsermanagementService) { }



public showdata(){

this.userdemo ? false : true
}



  ngOnInit(): void {
    this.ud.userdemographics().subscribe((posres)=>{

      this.userdemographics=posres;
    })
  }

}
