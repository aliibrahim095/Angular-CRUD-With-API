import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { UpdateuserComponent } from './Components/updateuser/updateuser.component';
import { UserdetailsComponent } from './Components/userdetails/userdetails.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'updateuser/:id', component: UpdateuserComponent },
  { path: 'users/:id', component: UserdetailsComponent },
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
