import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { AuthenService } from '../../core/services/authen.service';
import { UtilityService } from '../../core/services/utility.service';
import { SystemConstants } from '../../core/common/system.constants';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public pageIndex: number = 1;
  public pageSize: number = 5;
  public pageDisplay: number = 5;
  public totalRow: number;
  public filter: string = '';
  public orders: any[];
  public entity: any;
  public orderViewModel: any = {
    orders: [],
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
    var url = SystemConstants.API_ORDER_SERVICE_GET_ALL_PAGING;

    this.orderViewModel.Pager = {
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

    this._dataService.post(url, this.orderViewModel)
      .subscribe((response: any) => {
        this.orderViewModel.orders = response.orderDTOs;
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
    let url = '/main/order' + '/edit/' + id;
    this._utilityService.navigate(url);
  } 


  pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.loadData();
  }

  
}

