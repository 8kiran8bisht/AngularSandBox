import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})

export class UserComponent implements OnInit{
user: User;
constructor(){

}
ngOnInit(){
  this.user={
    firstName: "kiran",
    lastName:"bisht",
    email:"kb@hotemail.com"
    }
  }
}

 