import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRolesComponent } from './user-roles.component';
import { Routes, RouterModule } from '@angular/router';
import { UserRolesAddEditComponent } from './user-roles-add-edit/user-roles-add-edit.component';
import { FormsModule } from '@angular/forms';


const userRolesRoutes: Routes = [
  //localhost:4200/main/user
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/home/index
 { path: 'index', component: UserRolesComponent },
 { path: 'add-edit/:addOrEdit', component: UserRolesAddEditComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRolesRoutes),
    FormsModule
  ], 
  declarations: [UserRolesComponent, UserRolesAddEditComponent]
})
export class UserRolesModule { }
