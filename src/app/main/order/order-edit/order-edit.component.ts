import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from '../../../core/services/utility.service';
import { DataService } from '../../../core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from '../../../core/services/upload.service';
import { NotificationService } from '../../../core/services/notification.service';
import { SystemConstants } from '../../../core/common/system.constants';
import { MessageContstants } from '../../../core/common/message.constants';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  public orderViewModel: any = {};
  // public orderDetailViewModel: any = {};
  public title: string = '';
  public addOrEdit: string;
  // public entity: any;
  public uploadFileData: any = {};
  public orderDetailsList: any = [];
  @ViewChild("imagePath") imagePath;

  constructor(private _utilityService: UtilityService,
    private _dataService: DataService,
    private _activatedRoute: ActivatedRoute,
    private uploadService: UploadService, 
    private _notificationService: NotificationService) {

    this.addOrEdit = this._activatedRoute.snapshot.params.addOrEdit;
    var id = this._activatedRoute.snapshot.params.id;

    this.title = 'CẬP NHẬT ORDER';
    this.orderViewModel.ID = id;

    this._dataService.post(SystemConstants.API_ORDER_SERVICE_GET_BY_ID, 
      JSON.stringify(this.orderViewModel))
    .subscribe((response: any) => {
      this.orderViewModel = response;  
            
    }, 
    error => this._dataService.handleError(error));

   
  }

  ngOnInit() {
  }

  public goBack() {
    this._utilityService.navigate('/main/order/index');
  }

  

  //Save change for modal popup
  public saveChanges(valid: boolean) {
    if (valid) {
      this._dataService.post(SystemConstants.API_ORDER_SERVICE_UPDATE, 
        JSON.stringify(this.orderViewModel))
        .subscribe((response: any) => {
          this.orderViewModel = response;
          this._notificationService.printSuccessMessage(this.orderViewModel.ReturnMessage[0]);
          this._utilityService.navigate('/main/order/index');

        },
        error => this._dataService.handleError(error));
      

    }
  }

  
 
}
