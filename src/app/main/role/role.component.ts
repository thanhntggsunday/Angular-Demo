import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
// import { ModalDirective } from 'ngx-bootstrap/modal';
import { NotificationService } from '../../core/services/notification.service';
import { MessageContstants } from '../../core/common/message.constants';
import { AuthenService } from '../../core/services/authen.service';
import { UtilityService } from '../../core/services/utility.service';
import { SystemConstants } from '../../core/common/system.constants';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  public pageIndex: number = 1;
  public pageSize: number = 5;
  public pageDisplay: number = 5;
  public totalRow: number;
  public filter: string = '';
  public roles: any[];
  public entity: any;
  public bodyData: any = {
    Pager: {}
  };

  public titleOfModal: string = 'Add / Edit';


  constructor(private _dataService: DataService, private _notificationService: NotificationService,
    public _authenService: AuthenService, private _utilityService: UtilityService) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    var url = SystemConstants.API_ROLE_SERVICE_GET_ALL;

    this.bodyData.Pager = {
      TotalRows: this.totalRow,
      PageSize: this.pageSize,
      CurrentPageNumber: this.pageIndex,
      MaxPageDisplayNumber: 5,
      FistPageNumber: 1,
      TotalPages: 0,
      StartPageNumber: 1,
      EndPageNumber: 0,
      LastPageNumber: 0,
      PrevPageNumber: 0,
      NextPageNumber: 0
    };

    this._dataService.post(url, this.bodyData)
      .subscribe((response: any) => {
        this.roles = response.Roles;
        console.log(this.roles);
        this.pageSize = response.Pager.PageSize;
        this.totalRow = response.Pager.TotalRows;
        this.pageIndex = response.Pager.CurrentPageNumber;

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

  deleteItem(id: any) {
    this._notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG,
      () => this.deleteItemConfirm(id));
  }

  deleteItemConfirm(id: any) {
    this.bodyData = { RoleId: id };
    this._dataService.post(SystemConstants.API_ROLE_SERVICE_DELETE, this.bodyData)
      .subscribe((response: Response) => {
        this._notificationService.printSuccessMessage(MessageContstants.DELETED_OK_MSG);
        this.loadData();
      });
  }

}
