import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Post} from '../../model/Post';
import {PostService} from '../../services/post.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost:Post;
  @Input() isEdit:boolean;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

addPost(title,body){
  if(!title || !body){
    alert("please enter the information! ");
  }
  else{
      this.postService.savePost({title,body} as Post).subscribe(
        post=>{
         this.newPost.emit(post);
        }
      )
    
  } 
}

updatePost(){
  this.postService.updatePost(this.currentPost).subscribe(post=>
    {console.log(post) ;
      this.updatedPost.emit(post)})
    this.isEdit=false;
}
}
