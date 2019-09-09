import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCategoryComponent } from './post-category.component';
import { Routes, RouterModule } from '@angular/router';

const postCategoryRoutes: Routes = [
  //localhost:4200/main/user
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/home/index
 { path: 'index', component: PostCategoryComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postCategoryRoutes)
  ],
  declarations: [PostCategoryComponent]
})
export class PostCategoryModule { }
