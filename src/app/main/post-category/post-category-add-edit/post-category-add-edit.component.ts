import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from '../../../core/services/utility.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { UploadService } from '../../../core/services/upload.service';
import { NotificationService } from '../../../core/services/notification.service';
import { SystemConstants } from '../../../core/common/system.constants';
import { MessageContstants } from '../../../core/common/message.constants';

@Component({
  selector: 'app-post-category-add-edit',
  templateUrl: './post-category-add-edit.component.html',
  styleUrls: ['./post-category-add-edit.component.css']
})
export class PostCategoryAddEditComponent implements OnInit {

  public categoryViewModel: any = {};
  public title: string = '';
  public addOrEdit: string;
  public entity: any;
  public uploadFileData: any = {};
  @ViewChild("imagePath") imagePath;

  constructor(private _utilityService: UtilityService,
    private _dataService: DataService,
    private _activatedRoute: ActivatedRoute,
    private uploadService: UploadService, 
    private _notificationService: NotificationService) {

    this.addOrEdit = this._activatedRoute.snapshot.params.addOrEdit;
    var id = this._activatedRoute.snapshot.params.id;

    if (this.addOrEdit == 'add') {
      this.title = 'THÊM MỚI CATEGORY';
    }
    else {
      this.title = 'CẬP NHẬT CATEGORY';
      this.categoryViewModel.ID = id;

      this._dataService.post(SystemConstants.API_POST_CATEGORY_SERVICE_GET_BY_ID, 
        JSON.stringify(this.categoryViewModel))
      .subscribe((response: any) => {
        this.categoryViewModel = response;        
      }, error => this._dataService.handleError(error));

    }
  }

  ngOnInit() {
  }

  public goBack() {
    this._utilityService.navigate('/main/product-category/index');
  }

  

  //Save change for modal popup
  public saveChanges(valid: boolean) {
    if (valid) {
      if (this.addOrEdit == 'add') {
        this._dataService.post(SystemConstants.API_POST_CATEGORY_SERVICE_CREATE, 
          JSON.stringify(this.categoryViewModel))
          .subscribe((response: any) => {
            this.categoryViewModel = response;
            this._notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
            this._utilityService.navigate('/main/post-category/index');
  
          },
          error => this._dataService.handleError(error));
      } 
      else {
        this._dataService.post(SystemConstants.API_POST_CATEGORY_SERVICE_UPDATE, 
          JSON.stringify(this.categoryViewModel))
          .subscribe((response: any) => {
            this.categoryViewModel = response;
            this._notificationService.printSuccessMessage(this.categoryViewModel.ReturnMessage[0]);
            this._utilityService.navigate('/main/post-category/index');
  
          },
          error => this._dataService.handleError(error));
      }
      

    }
  }

  
 
}
