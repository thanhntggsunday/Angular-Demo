import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from '../../../core/services/utility.service';
import { DataService } from '../../../core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service';
import { SystemConstants } from '../../../core/common/system.constants';
import { MessageContstants } from '../../../core/common/message.constants';
import { UploadService } from '../../../core/services/upload.service';

@Component({
  selector: 'app-product-category-add-edit',
  templateUrl: './product-category-add-edit.component.html',
  styleUrls: ['./product-category-add-edit.component.css']
})
export class ProductCategoryAddEditComponent implements OnInit {

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

      this._dataService.post(SystemConstants.API_PRODUCT_CATEGORY_SERVICE_GET_BY_ID, 
        JSON.stringify(this.categoryViewModel))
      .subscribe((response: any) => {
        this.categoryViewModel = response;        
      }, 
      error => this._dataService.handleError(error));

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
        this._dataService.post(SystemConstants.API_PRODUCT_CATEGORY_SERVICE_CREATE, 
          JSON.stringify(this.categoryViewModel))
          .subscribe((response: any) => {
            this.categoryViewModel = response;
            this._notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
            this._utilityService.navigate('/main/product-category/index');
  
          },
          error => this._dataService.handleError(error));
      } 
      else {
        this._dataService.post(SystemConstants.API_PRODUCT_CATEGORY_SERVICE_UPDATE, 
          JSON.stringify(this.categoryViewModel))
          .subscribe((response: any) => {
              this.categoryViewModel = response;
              this._notificationService.printSuccessMessage(this.categoryViewModel.ReturnMessage[0]);
              this._utilityService.navigate('/main/product-category/index');
    
            },
            error => this._dataService.handleError(error)
          );
      }
      

    }
  }

  
  public saveProductCategoryImage(isValid = true) {
    if (isValid) {
      let fi = this.imagePath.nativeElement;
      if (fi.files.length > 0) {
        this.uploadFileData.fileType = '/UploadedFiles/productCategory/';

        this.uploadService.postWithFile(SystemConstants.API_UPLOAD_SERVICE_UPLOAD_FILE, this.uploadFileData, fi.files)
        .then((imageUrl: string) => {
          var imgUrl = imageUrl;
          this.categoryViewModel.Image = imageUrl;
          
          console.log(imgUrl);
          console.log(this.categoryViewModel.Image);

        });
      }
    }
  }

  


}
