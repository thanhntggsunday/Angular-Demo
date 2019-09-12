import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../../core/services/authen.service';
import { DataService } from '../../../core/services/data.service';
import { NotificationService } from '../../../core/services/notification.service';
import { UtilityService } from '../../../core/services/utility.service';
import { SystemConstants } from '../../../core/common/system.constants';
import { MessageContstants } from '../../../core/common/message.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-roles-add-edit',
  templateUrl: './user-roles-add-edit.component.html',
  styleUrls: ['./user-roles-add-edit.component.css']
})
export class UserRolesAddEditComponent implements OnInit {

  public userRolesViewModel: any = {};
  public rolesViewModel: any = {};
  public users: any[];
  public roles: any[];
  
  public title: string = '';


  constructor(private _dataService: DataService,
    private _notificationService: NotificationService,
    public _authenService: AuthenService,
    private activatedRoute: ActivatedRoute,
    private _utilityService: UtilityService) {

    var addOrEdit = this.activatedRoute.snapshot.params.addOrEdit;
    if (addOrEdit === 'add') {
      this.title = 'Add user to role';
    }
    else {
      this.title = 'Update user-role';
    }
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._dataService.post(SystemConstants.API_USER_ROLES_SERVICE_GET_ALL_USERS_AND_ROLES_LIST,
      this.userRolesViewModel)
      .subscribe((response: any) => {
        this.users = response.Users;
        this.roles = response.Roles;

        this.users.forEach(u => {
          console.log(u.Id);
          console.log(u.Email);
        });
      },
        (error) => {
          console.log(error);
          this._utilityService.navigateToLogin();
        }
      );

  }

  //Save change for modal popup
  public saveChanges(valid: boolean) {
    if (valid) {
      this._dataService.post(SystemConstants.API_USER_ROLES_SERVICE_CREATE,
        JSON.stringify(this.userRolesViewModel))
        .subscribe((response: any) => {
          this.userRolesViewModel = response;
          this._notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
          this._utilityService.navigate('/main/user-roles/index');

        },
          error => this._dataService.handleError(error));

    }

  }


}
