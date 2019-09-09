import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorisedComponent } from './unauthorised.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //localhost:4200/main/user
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/home/index
 { path: 'index', component: UnauthorisedComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnauthorisedComponent]
})
export class UnauthorisedModule { }
