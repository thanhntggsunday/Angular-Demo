import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { AuthenService } from '../../core/services/authen.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { SystemConstants } from '../../core/common/system.constants';
import { MessageContstants } from '../../core/common/message.constants';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public pageIndex: number = 1;
  public pageSize: number = 2;
  public pageDisplay: number = 5;
  public totalRow: number;
  public filter: string = '';
  public posts: any[];
  public entity: any;
  public postViewModel: any = {
    posts: [],
    Pager: {}
  };
  public baseFolder: string;

  constructor(private _dataService: DataService, private _notificationService: NotificationService,
    public _authenService: AuthenService, private _utilityService: UtilityService) {

      this.baseFolder = SystemConstants.BASE_API;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    var url = SystemConstants.API_POST_SERVICE_GET_ALL;

    this.postViewModel.Pager = {
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

    this._dataService.post(url, this.postViewModel)
      .subscribe((response: any) => {
        this.postViewModel.posts = response.PostDTOs;
        console.log(response);
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

  public showEdit(id: any) {
    let url = '/main/post' + '/add-edit/' + id + '/edit';
    this._utilityService.navigate(url);
  }

  public showAdd() {
    let url = '/main/post' + '/add-edit/0'  + '/add';
    this._utilityService.navigate(url);
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
    this.postViewModel = { ID: id };
    this._dataService.post(SystemConstants.API_POST_SERVICE_DELETE, this.postViewModel)
      .subscribe((response: any) => {
        this._notificationService.printSuccessMessage(response.ReturnMessage[0]);
        this.loadData();
      });
  }

}
