import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';
import { Routes, RouterModule } from '@angular/router';

const productCategoryRoutes: Routes = [
  //localhost:4200/main/user
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/home/index
 { path: 'index', component: ProductCategoryComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productCategoryRoutes)
  ], 
  declarations: [ProductCategoryComponent]
})
export class ProductCategoryModule { }
