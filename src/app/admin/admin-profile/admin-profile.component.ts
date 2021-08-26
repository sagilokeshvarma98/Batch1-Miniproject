import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'src/app/services/userprofile.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor( public userdata:UserprofileService) { }

  adminName:any = ""
  adminDetaile:any;
  ngOnInit(): void {
     this.userdata.userprofile().subscribe(res=>{
      this.adminDetaile=res;
      console.log(this.adminDetaile);
    })
    this.adminName = localStorage.getItem("currentUser")
    //console.log(this.adminName);
  }

}
