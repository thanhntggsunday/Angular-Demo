import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  //localhost:4200
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //localhost:4200/login
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  //localhost:4200/main
  { path: 'main', loadChildren: './main/main.module#MainModule'}
];

// , canActivate:[AuthGuard] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
