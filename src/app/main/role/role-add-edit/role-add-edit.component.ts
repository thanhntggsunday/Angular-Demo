import { Component, OnInit } from '@angular/core';
import { UtilityService } from "../../../core/services/utility.service";
import { DataService } from '../../../core/services/data.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MessageContstants } from '../../../core/common/message.constants';
import { SystemConstants } from '../../../core/common/system.constants';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-role-add-edit',
  templateUrl: './role-add-edit.component.html',
  styleUrls: ['./role-add-edit.component.css']
})
export class RoleAddEditComponent implements OnInit {
  public roleViewModel: any = {};
  public title: string = '';

  constructor(private utilityService: UtilityService,
    private _dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService) {     
      var addOrEdit = this.activatedRoute.snapshot.params.addOrEdit;
      //var param2 = this.activatedRoute.snapshot.paramMap.get("addOrEdit");
      if (addOrEdit === 'add') {
        this.title = 'Thêm mới role';
      }
      else {
        this.title = 'Update role';
      }
  }

  ngOnInit() {
  }

  public goBack() {
    this.utilityService.navigate('/main/role/index');
  }

  //Save change for modal popup
  public saveChanges(valid: boolean) {
    if (valid) {
      this._dataService.post(SystemConstants.API_ROLE_SERVICE_CREATE, JSON.stringify(this.roleViewModel))
        .subscribe((response: any) => {
          this.roleViewModel = response;
          this.notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
          this.utilityService.navigate('/main/role/index');

        },
        error => this._dataService.handleError(error));

    }

  }


}
