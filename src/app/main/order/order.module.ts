import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { OrderEditComponent } from './order-edit/order-edit.component';

const orderRoutes: Routes = [
  //localhost:4200/main/user
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/home/index
 { path: 'index', component: OrderComponent },
 { path: 'edit/:id', component: OrderEditComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(orderRoutes),
    PaginationModule.forRoot(),
    FormsModule
  ],
  declarations: [OrderComponent, OrderEditComponent]
})
export class OrderModule { }
