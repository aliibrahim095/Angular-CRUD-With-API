import { Component, OnInit } from '@angular/core';

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

  constructor(private route: ActivatedRoute,private userService: UsersService,private router: Router) {}

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

  UpdateUser(){
    console.log(this.usertoupdate);
    this.userService.UpdateUserById(this.id,this.usertoupdate).subscribe();
    this.router.navigateByUrl('home');

  }
}
