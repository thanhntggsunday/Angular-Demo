import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaginationModule  } from 'ngx-bootstrap/pagination';
import { RoleAddEditComponent } from './role-add-edit/role-add-edit.component';

const roleRoutes: Routes = [
  //localhost:4200/main/role
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/role/index
 { path: 'index', component: RoleComponent }, 
   //localhost:4200/main/role/add-edit
 { path: 'add-edit/:addOrEdit', component: RoleAddEditComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(roleRoutes),
    PaginationModule.forRoot(),
    FormsModule
  ], 
  declarations: [RoleComponent, RoleAddEditComponent]
})
export class RoleModule { }
