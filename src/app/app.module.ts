import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { UpdateuserComponent } from './Components/updateuser/updateuser.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { UserdetailsComponent } from './Components/userdetails/userdetails.component';

const routes:Routes=[
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"adduser",component:AdduserComponent},
  {path:"updateuser",component:UpdateuserComponent},
  {path:"users/:id",component:UserdetailsComponent},
  {path:"**",component:ErrorpageComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdduserComponent,
    UpdateuserComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
