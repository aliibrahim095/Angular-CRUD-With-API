import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styles: [],
})
export class AdduserComponent implements OnInit {
  constructor(private myService: UsersService, private router: Router) {}

  ngOnInit(): void {}
  fname;
  lname;
  email;
  age;
  city;
  street;

  user: {
    fname: string;
    lname: string;
    email: string;
    age: number;
    address: {
      city: string;
      street: string;
    };
  };

  emailPattern:string="[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
  AddNewUser() {
    if (this.Validation.valid) {
      this.user = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        age: this.age,
        address: { city: this.city, street: this.street },
      };
      this.myService.AddNewUser(this.user).subscribe();
      this.router.navigateByUrl('home');
      //  console.log(this.user);
    }
  }
  Validation = new FormGroup({
    fname: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
    ]),
    lname: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl(undefined, [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ]),
    city: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
    ]),
    street: new FormControl(undefined, [
      Validators.required,
      Validators.minLength(3),
    ]),
    age: new FormControl(undefined, [
      Validators.required,
      Validators.min(18),
      Validators.max(60),
    ]),
  });

  get isValidFname() {
    return this.Validation.controls.fname.valid;
  }

  get isValidLname() {
    return this.Validation.controls.lname.valid;
  }

  get isValidAge() {
    return this.Validation.controls.age.valid;
  }
  get isValidEmail() {
    return this.Validation.controls.email.valid;
  }
  get isValidCity() {
    return this.Validation.controls.city.valid;
  }
  get isValidStreet() {
    return this.Validation.controls.street.valid;
  }
}
