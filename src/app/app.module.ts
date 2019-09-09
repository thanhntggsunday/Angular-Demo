import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthenService } from './core/services/authen.service';
import { NotificationService } from './core/services/notification.service';
import { UtilityService } from './core/services/utility.service';
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthenService, NotificationService, UtilityService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
