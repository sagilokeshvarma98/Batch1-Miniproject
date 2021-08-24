import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  @Input() itemComment: any;

  constructor(private comment:CommentService ) { 
    // this.comment.getComment().subscribe(
    //   (data)=>{
    //     this.itemComment=data
    //   }
    // )
  }

  ngOnInit(): void {
    console.log(this.itemComment);
    
  }

}
