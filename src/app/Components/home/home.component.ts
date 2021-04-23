import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private usrService:UsersService) { }
  users;
  ngOnInit(): void {
    this.usrService.getAllUsers().subscribe(
      (res)=>{
        this.users=res; 
      },
      (err)=>{console.log(err);}
    )
  }

}
