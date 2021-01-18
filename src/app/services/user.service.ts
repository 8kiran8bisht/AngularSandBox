import { Injectable } from '@angular/core';
import {User} from '../model/User';
import { Observable } from 'rxjs';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  constructor() { 
    this.users=[
      {
        firstName: "kiran",
        lastName:"bisht",
        email:"kb@gmail.com",
        isActive:false,
        registered: new Date('01/02/2018 08:30:00'),
        hide:true
      },
      {
        firstName: "kb1",
        lastName:"bisht",
       email:"kb1@gmail.com",
        isActive:true,
        registered: new Date('01/02/2018 08:30:00'),
        hide:true
      },
      {
        firstName: "tushar",
        lastName:"bisht",
        email:"tu@gmail.com",
        isActive:false,
        registered: new Date('01/02/2018 08:30:00'),
        hide:true
      }
    ];
    
  }
  getUser():Observable<User[]>{
    return of(this.users);
  }

  addUser(user:User){
    this.users.unshift(user);
  }
}
