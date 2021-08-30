import { Component, Input, OnInit } from '@angular/core';
import { UsermanagementService } from 'src/app/services/usermanagement.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  currentUsers: any;

  constructor(private users:UsermanagementService) { }

  // getUsers(){
  //   this.users.userdemographics().subscribe(
  //     (data)=>{
  //       console.log("hello",data),
  //       this.currentUsers=data}
  //   )
  // }
  // recoversuccess(value: any) {
  //   console.log(value);
  //   // if (value == "success") {
  //   //   this.getuser();
  //   // }
  // }
  ngOnInit(): void {
    // this.getUsers();
  }

  

}
