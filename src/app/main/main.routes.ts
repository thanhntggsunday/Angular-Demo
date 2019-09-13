import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    {
        //localhost:4200/main
        path: '', component: MainComponent, children: [
            //localhost:4200/main
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            //localhost:4200/main/home
            { path: 'home', loadChildren: './home/home.module#HomeModule' },

            { path: 'role', loadChildren: './role/role.module#RoleModule' },

            { path: 'product-category', loadChildren: './product-category/product-category.module#ProductCategoryModule' },

            { path: 'product', loadChildren: './product/product.module#ProductModule' },

            { path: 'order', loadChildren: './order/order.module#OrderModule' },

            { path: 'user-roles', loadChildren: './user-roles/user-roles.module#UserRolesModule' },

            { path: 'post-category', loadChildren: './post-category/post-category.module#PostCategoryModule' },

            { path: 'post', loadChildren: './post/post.module#PostModule' },


            { path: 'unauthorised', loadChildren: './unauthorised/unauthorised.module#UnauthorisedModule' }


        ]
    }

]