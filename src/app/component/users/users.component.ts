import { Component, OnInit, ViewChild } from '@angular/core';
import {User} from '../../model/User';
import {DataService} from '../../services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  user:User = {
    firstName: " ",
        lastName:" ",
        email:" "
  };
  
  loaded:boolean=true;
  enabled:boolean=true;
  showExtended:boolean=true;
  showUserForm:boolean=false;
  @ViewChild('userForm')form: any;
  constructor( private dataService: DataService) { }
 
  ngOnInit(): void {
    this.dataService.getUser().subscribe(obj=>{
      this.users=obj;
    });
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
  if(!valid){
    console.log("form is not valid");
  }  
  else{
    value.isActive=true;
    value.registered=new Date();
    value.hide=true;
    this.dataService.addUser(value);
    this.form.reset();
  }
  }
}
