import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCategoryComponent } from './post-category.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostCategoryAddEditComponent } from './post-category-add-edit/post-category-add-edit.component';

const postCategoryRoutes: Routes = [
  //localhost:4200/main/user
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/home/index
 { path: 'index', component: PostCategoryComponent },
 { path: 'add-edit/:id/:addOrEdit', component: PostCategoryAddEditComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postCategoryRoutes),
    FormsModule
  ],
  declarations: [PostCategoryComponent, PostCategoryAddEditComponent]
})
export class PostCategoryModule { }
