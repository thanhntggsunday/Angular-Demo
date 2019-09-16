import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { Routes, RouterModule } from '@angular/router';
import { PostAddEditComponent } from './post-add-edit/post-add-edit.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { SimpleTinymcModule } from '../shared/simple-tinymc/simple-tinymc.module';
// import { SimpleTinymcComponent } from '../shared/simple-tinymc/simple-tinymc.component';

const postRoutes: Routes = [
  //localhost:4200/main/user
 { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/home/index
 { path: 'index', component: PostComponent },
 { path: 'add-edit/:id/:addOrEdit', component: PostAddEditComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes),
    PaginationModule.forRoot(),
    FormsModule,
    SimpleTinymcModule
  ],
  declarations: [PostComponent, PostAddEditComponent]
})
export class PostModule { }
