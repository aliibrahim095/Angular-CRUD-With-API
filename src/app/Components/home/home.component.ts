import { Component, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private usrService: UsersService, private router: Router) {}
  users;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [3, 6, 9, 12];
  fetchUsers(): void {
    this.usrService.getAllUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.usrService.getAllUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

// 
onTableDataChange(event){
  this.page = event;
  this.fetchUsers();
}  

onTableSizeChange(event): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.fetchUsers();
}  


// 



  goToAddUser() {
    this.router.navigateByUrl('adduser');
  }

   viewUser(id) {
    this.router.navigateByUrl(`users/${id}`);
  }

  updateUser(id){
    this.router.navigateByUrl(`updateuser/${id}`);
  }
  deleteUser(id) {
    this.usrService.DeleteUserById(id).subscribe((data) => {
      console.log(data);
    });
    window.location.reload()
  }
}