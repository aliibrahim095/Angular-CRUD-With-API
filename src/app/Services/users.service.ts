import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl="http://localhost:3000/users";
  constructor(private myClient:HttpClient) {

   }
   getAllUsers(){
     return this.myClient.get(this.baseUrl);
   }
   getUserById(id){
     return this.myClient.get(this.baseUrl+'/'+id);
   }
   AddNewUser(user){
     return this.myClient.post(this.baseUrl,user);
   }
   DeleteUserById(id){
    return this.myClient.delete(this.baseUrl+'/'+id);
  }
  UpdateUserById(id,user){
    return this.myClient.patch(this.baseUrl+'/'+id,user);
  }
}