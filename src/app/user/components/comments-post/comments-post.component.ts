import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.css']
})

export class CommentsPostComponent {
  

  // @Input() comment:any;

  commentPost:FormGroup;
  currentRate:number=0;
  
  constructor(private fb:FormBuilder,private comment:CommentService) { 
    this.commentPost = this.fb.group({
      msg: ['',[Validators.required,Validators.minLength(10)]],
    });
   }


  saveReview() {
    let temp ={
      name: this.commentPost.value.name,
      rating: this.commentPost.value.rating,
      msg: this.commentPost.value.msg,
    }
    this.comment.postComment(temp).subscribe(
      ()=>
      {
        alert(`your comment is posted`)
      }
      
    );
  }

}
