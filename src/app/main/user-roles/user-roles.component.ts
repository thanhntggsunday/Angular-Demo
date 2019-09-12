import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { AuthenService } from '../../core/services/authen.service';
import { UtilityService } from '../../core/services/utility.service';
import { SystemConstants } from '../../core/common/system.constants';
import { MessageContstants } from '../../core/common/message.constants';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  public pageIndex: number = 1;
  public pageSize: number = 1000;
  public pageDisplay: number = 5;
  public totalRow: number;
  public filter: string = '';
  public userRoles: any[];
  public entity: any;
  public bodyData: any = {
    Pager: {}
  };

 
  constructor(private _dataService: DataService, private _notificationService: NotificationService,
    public _authenService: AuthenService, private _utilityService: UtilityService) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    var url = SystemConstants.API_USER_ROLES_SERVICE_GET_ALL;

    this._dataService.post(url, this.bodyData)
      .subscribe((response: any) => {
        this.userRoles = response.UserRolesList;
        console.log(this.userRoles);       

      },
        (error) => {
          console.log(error);
          this._utilityService.navigateToLogin();
        }
      );
  }


  pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.loadData();
  }

  deleteItem(uid: any, roleName: any) {
    this._notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG,
      () => this.deleteItemConfirm(uid, roleName));
  }

  deleteItemConfirm(uid: any, roleName: any) {
    this.bodyData = { UserId: uid, RoleName: roleName };
    this._dataService.post(SystemConstants.API_USER_ROLES_SERVICE_DELETE, this.bodyData)
      .subscribe((response: any) => {
        // ReturnMessage
        this._notificationService.printSuccessMessage(response.ReturnMessage);
        this.loadData();
      });
  }

}