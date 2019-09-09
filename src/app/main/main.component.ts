import { Component, OnInit } from '@angular/core';
import { LoggedInDomain } from '../core/domain/loggedin.domain';
import { SystemConstants } from '../core/common/system.constants';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
import { UrlConstants } from '../core/common/url.constants';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  public user: LoggedInDomain;
  public baseFolder: string = SystemConstants.BASE_API;
  constructor(private utilityService: UtilityService, private authenService: AuthenService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));

    var userInStorage = localStorage.getItem(SystemConstants.CURRENT_USER);
    console.log(userInStorage);
    console.log(this.user);    
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    // alert('logout');
    this.utilityService.navigate(UrlConstants.LOGIN);
    
  }
}
