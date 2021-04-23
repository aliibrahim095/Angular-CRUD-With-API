import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styles: [],
})
export class AdduserComponent implements OnInit {
  constructor(private myService: UsersService,private router:Router) {}

  ngOnInit(): void {}
  fname;
  lname;
  email;
  age;
  city;
  street;



  user: {
    fname: string,
    lname: string,
    email: string,
    age: number,
    address: {
      city: string,
      street: string
    }
  };
  AddNewUser() {
    this.user = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      age: this.age,
      address: { city: this.city, street: this.street }
    };
   this.myService.AddNewUser(this.user).subscribe();
    this.router.navigateByUrl('home');
  //  console.log(this.user);
  }
}