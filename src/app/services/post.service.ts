import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from "@angular/common/http";
import {Post} from '../model/Post';
import{Observable} from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl:string='https://jsonplaceholder.typicode.com/posts';
 
  constructor(private http:HttpClient) { }
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post:Post):Observable<Post>{
    return this.http.post<Post>(this.postsUrl, post,httpOptions);
    //return this.http.post<Post>(this.postsUrl,post,httpOptions);
  }
  
  updatePost(post:Post):Observable<Post>{
    return this.http.put<Post>(`${this.postsUrl}/${post.id}`, post,httpOptions);
  }
  getPost(id:number):Observable<Post>{
    return this.http.get<Post>(`${this.postsUrl}/${id}`);
  }
  removePost(post:Post|number):Observable<Post>{
    const id= typeof post==='number'?post:post.id;
    return this.http.delete<Post>(`${this.postsUrl}/${id}`,httpOptions);
  }

}
