import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductCategoryAddEditComponent } from './product-category-add-edit/product-category-add-edit.component';

const productCategoryRoutes: Routes = [
  //localhost:4200/main/user
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/home/index
 { path: 'index', component: ProductCategoryComponent },
 { path: 'add-edit/:id/:addOrEdit', component: ProductCategoryAddEditComponent }
]
// :id/:addOrEdit

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productCategoryRoutes),
    FormsModule
  ], 
  declarations: [ProductCategoryComponent, ProductCategoryAddEditComponent]
})
export class ProductCategoryModule { }
