import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styles: [],
})
export class UserdetailsComponent implements OnInit {
  id;
  constructor(route: ActivatedRoute, private userSrvice: UsersService,private router: Router) {
    this.id = route.snapshot.params.id;
  }

  user;
  ngOnInit(): void {
    this.userSrvice.getUserById(this.id).subscribe(
      (res) => {
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  goHome(){
    this.router.navigateByUrl('home');
  }
}