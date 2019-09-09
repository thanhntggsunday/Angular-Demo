import { Component, OnInit, NgZone } from '@angular/core';
import { LoggedInDomain } from '../../../core/domain/loggedin.domain';
import { AuthenService } from '../../../core/services/authen.service';
import { SystemConstants } from '../../../core/common/system.constants';
import { UrlConstants } from '../../../core/common/url.constants';
import { DataService } from '../../../core/services/data.service';
import { UtilityService } from '../../../core/services/utility.service';

import * as moment from 'moment';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  public user: LoggedInDomain;
  public baseFolder: string = SystemConstants.BASE_API;
  public canSendMessage: Boolean;
  public announcements: any[];
  constructor(private _authenService: AuthenService,
    private utilityService: UtilityService,   
    private _dataService: DataService,
    private _ngZone: NgZone) {
   
  }

  ngOnInit() {
    this.user = this._authenService.getLoggedInUser();

  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this.utilityService.navigate(UrlConstants.LOGIN);
  }
 
  
}
