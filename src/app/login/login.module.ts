import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

export const routes: Routes = [
  //localhost:4200/login
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule  
  ],
  // providers: [AuthenService, NotificationService]
  providers: []
})
export class LoginModule { }
