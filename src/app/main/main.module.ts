import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { AuthenService } from '../core/services/authen.service';
import { DataService } from '../core/services/data.service';
import { NotificationService } from '../core/services/notification.service';
import { UploadService } from '../core/services/upload.service';
import { mainRoutes } from './main.routes';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { SidebarMenuComponent } from './shared/sidebar-menu/sidebar-menu.component';
import { SimpleTinymcComponent } from './shared/simple-tinymc/simple-tinymc.component';
import { SimpleTinymcModule } from './shared/simple-tinymc/simple-tinymc.module';

@NgModule({
  imports: [
    CommonModule,   
    RouterModule.forChild(mainRoutes),
    SimpleTinymcModule
  ], 
  providers: [AuthenService, DataService, NotificationService,UploadService],
  declarations: [MainComponent, TopMenuComponent, SidebarMenuComponent]
})
export class MainModule { }
