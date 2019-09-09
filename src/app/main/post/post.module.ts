import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { Routes, RouterModule } from '@angular/router';

const postRoutes: Routes = [
  //localhost:4200/main/user
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/home/index
 { path: 'index', component: PostComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes)
  ],
  declarations: [PostComponent]
})
export class PostModule { }
