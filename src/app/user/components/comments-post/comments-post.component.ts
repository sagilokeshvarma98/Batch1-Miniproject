import { Component, OnInit, Output, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.css']
})

export class CommentsPostComponent implements OnInit {
  

  commentPost:FormGroup;
  currentRate:number=0;
  
  constructor(private fb:FormBuilder,private comment:CommentService) { 
    this.commentPost = this.fb.group({
      name:['',[Validators.required]],
      rating:['',[Validators.required]],
      msg:['',[Validators.required,Validators.minLength(10)]],
    });
   }

  ngOnInit(): void {
   
  }

  saveReview(){
    let temp ={
      name:this.commentPost.value.name,
      rating:this.commentPost.value.rating,
      msg:this.commentPost.value.msg,
    }
    this.comment.postComment(temp).subscribe(
      ()=>
      {
        alert(`your comment is posted`)
      }
      
    );
    window.location.reload;
  }

}
