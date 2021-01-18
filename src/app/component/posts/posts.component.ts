import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/Post';
import {PostService} from '../../services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost:Post={
    id:0,
    title:' ',
    body:' '
  }
  isEdit:boolean=false;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(post=>{
      this.posts=post;
    })
  }
  onNewPost(post){
    this.posts.unshift(post);
  }
  editPost(post:Post){
   this.currentPost=post;
   this.isEdit=true;
  }
  onUpdatedPost(post:Post){
    this.posts.forEach((cur,index)=>{
      if(post.id===cur.id){
        this.posts.slice(index,1);
        this.posts.unshift(post);
        this.isEdit=false;
        this.currentPost={
          id:0,
          title:' ',
          body:' '
        }
      }
    })
  }
  removePost(post:Post){
    if(confirm("Are you sure1"))
    this.postService.removePost(post.id).subscribe(()=>{
      this.posts.forEach((cur,index)=>{
        if(post.id===cur.id){
          this.posts.slice(index,1);
        }
      })
    })
    
  }
}
