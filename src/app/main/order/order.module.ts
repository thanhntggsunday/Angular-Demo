import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { Routes, RouterModule } from '@angular/router';

const orderRoutes: Routes = [
  //localhost:4200/main/user
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/home/index
 { path: 'index', component: OrderComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(orderRoutes)
  ],
  declarations: [OrderComponent]
})
export class OrderModule { }
