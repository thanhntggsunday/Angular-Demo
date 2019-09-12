import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { AuthenService } from '../../core/services/authen.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { SystemConstants } from '../../core/common/system.constants';
import { MessageContstants } from '../../core/common/message.constants';
import { UploadService } from '../../core/services/upload.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  public pageIndex: number = 1;
  public pageSize: number = 1000;
  public pageDisplay: number = 5;
  public totalRow: number;
  public filter: string = '';
  public categories: any[];
  public entity: any;
  public bodyData: any = {
    Pager: {}
  };

  constructor(private _dataService: DataService, 
    private _notificationService: NotificationService,
    public _authenService: AuthenService,    
    private _utilityService: UtilityService) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    var url = SystemConstants.API_PRODUCT_CATEGORY_SERVICE_GET_ALL;

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
        this.categories = response.ProductCategoryDTOs;       
      },
        (error) => {
          console.log(error);
          this._utilityService.navigateToLogin();
        }
      );
  }

  public showEdit(id: any) {
    let url = '/main/product-category' + '/add-edit/' + id + '/edit';
    this._utilityService.navigate(url);
  }

  public showAdd() {
    let url = '/main/product-category' + '/add-edit/0'  + '/add';
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
    this.bodyData = { ID: id };
    this._dataService.post(SystemConstants.API_PRODUCT_CATEGORY_SERVICE_DELETE, this.bodyData)
      .subscribe((response: any) => {
        this._notificationService.printSuccessMessage(response.ReturnMessage[0]);
        this.loadData();
      });
  }




}
