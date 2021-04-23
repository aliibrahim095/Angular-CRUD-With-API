import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styles: [],
})
export class UpdateuserComponent implements OnInit {
  id;
  usertoupdate;

  fname;
  lname;
  email;
  age;
  city;
  street;
  emailPattern: string = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) {}

  //when rendered
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService.getUserById(this.id).subscribe(
      (res) => {
        this.usertoupdate = res;
        console.log(this.usertoupdate);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  UpdateUser() {
    console.log(this.usertoupdate);
    if (this.Validation.valid) {
      this.userService.UpdateUserById(this.id, this.usertoupdate).subscribe();
      this.router.navigateByUrl('home');
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
      Validators.pattern(this.emailPattern),
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
