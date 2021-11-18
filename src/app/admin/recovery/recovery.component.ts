import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { UsermanagementService } from 'src/app/services/usermanagement.service';



@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
lostedaccount:any
panelOpenState = false;
length:boolean=false;
@Output() recover = new EventEmitter()


  constructor(private ur:UsermanagementService) { }

recovery() {
  this.ur.recoveraccount().subscribe((posres)=>{
    this.lostedaccount=posres;
   if( this.lostedaccount.length==0) {
    this.length=true;
   }
    console.log(posres)
  })
}



accept(data:any,id:any) {

let userdata={
  
      "username": data.username,
      "useremail": data.useremail
}

  
  


 
  this.ur.accept(userdata).subscribe((res)=>{
    console.log(res)

  })
this.ur.recovered(id).subscribe((posres)=>{
  console.log(posres)


  this.recovery();
  console.log("emited")
  this.recover.emit('success')
})



}

  ngOnInit(): void {

this.recovery();

  }

}
