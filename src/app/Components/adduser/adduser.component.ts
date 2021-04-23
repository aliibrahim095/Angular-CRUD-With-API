import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styles: [],
})
export class AdduserComponent implements OnInit {
  constructor(private myService: UsersService) {}

  ngOnInit(): void {}

  id: number = 4;
  fname;
  lname;
  email;
  age;
  city;
  street;

  user: {
    id: number;
    fname: string;
    lname: string;
    email: string;
    age: number;
    address: {
      city: string;
      street: string;
    }
  };
  AddNewUser() {
    this.user = {
      id: this.id,
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      age: this.age,
      address: { city: this.city, street: this.street }
    };
   this.myService.AddNewUser(this.user).subscribe();
  //  console.log(this.user);
  }
}