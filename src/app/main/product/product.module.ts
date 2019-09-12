import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { SimpleTinymcComponent } from '../shared/simple-tinymc/simple-tinymc.component';

const productRoutes: Routes = [
  //localhost:4200/main/user
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/home/index
 { path: 'index', component: ProductComponent },
 { path: 'add-edit/:id/:addOrEdit', component: ProductAddEditComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    PaginationModule.forRoot(),
    FormsModule
  ], 
  declarations: [ProductComponent, ProductAddEditComponent, SimpleTinymcComponent]
})
export class ProductModule { }
