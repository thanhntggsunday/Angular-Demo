import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from '../../../core/services/utility.service';
import { DataService } from '../../../core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from '../../../core/services/upload.service';
import { NotificationService } from '../../../core/services/notification.service';
import { SystemConstants } from '../../../core/common/system.constants';
import { MessageContstants } from '../../../core/common/message.constants';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {

  @ViewChild("imagePath") imagePath;
  public productViewModel: any = {};
  public title: string = '';
  public addOrEdit: string;
  public entity: any;
  public uploadFileData: any = {};
  public categories: any[];
  public productCategoryViewModel: any = {};
  

  constructor(private _utilityService: UtilityService,
    private _dataService: DataService,
    private _activatedRoute: ActivatedRoute,
    private uploadService: UploadService, 
    private _notificationService: NotificationService) {

    this.addOrEdit = this._activatedRoute.snapshot.params.addOrEdit;
    var id = this._activatedRoute.snapshot.params.id;

    this.productViewModel.Content = '';

    if (this.addOrEdit == 'add') {
      this.title = 'THÊM MỚI PRODUT';
    }
    else {
      this.title = 'CẬP NHẬT PRODUT';
      this.productViewModel.ID = id;

      this._dataService.post(SystemConstants.API_PRODUCT_SERVICE_GET_BY_ID, 
        JSON.stringify(this.productViewModel))
      .subscribe((response: any) => {
        this.productViewModel = response;        
      }, error => this._dataService.handleError(error));

    }
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._dataService.post(SystemConstants.API_PRODUCT_CATEGORY_SERVICE_GET_ALL,
      this.productCategoryViewModel)
      .subscribe((response: any) => {
        this.categories = response.ProductCategoryDTOs;        
      },
        (error) => {
          console.log(error);
          this._utilityService.navigateToLogin();
        }
      );

  }

  public goBack() {
    this._utilityService.navigate('/main/product/index');
  }

  

  //Save change for modal popup
  public saveChanges(valid: boolean) {
    if (valid) {
      if (this.addOrEdit == 'add') {
        this._dataService.post(SystemConstants.API_PRODUCT_SERVICE_CREATE, 
          JSON.stringify(this.productViewModel))
          .subscribe((response: any) => {
            this.productViewModel = response;
            this._notificationService.printSuccessMessage(this.productViewModel.ReturnMessage[0]);
            this._utilityService.navigate('/main/product/index');
  
          },
          error => this._dataService.handleError(error));
      } 
      else {
        this._dataService.post(SystemConstants.API_PRODUCT_SERVICE_UPDATE, 
          JSON.stringify(this.productViewModel))
          .subscribe((response: any) => {
            this.productViewModel = response;
            this._notificationService.printSuccessMessage(this.productViewModel.ReturnMessage[0]);
            this._utilityService.navigate('/main/product/index');
  
          },
          error => this._dataService.handleError(error));
      }
      

    }
  }

  
  public saveProductImage(isValid = true) {
    if (isValid) {
      let fi = this.imagePath.nativeElement;
      if (fi.files.length > 0) {
        this.uploadFileData.fileType = '/UploadedFiles/Products';

        this.uploadService.postWithFile(SystemConstants.API_UPLOAD_SERVICE_UPLOAD_FILE, this.uploadFileData, fi.files)
        .then((imageUrl: string) => {
          var imgUrl = imageUrl;
          this.productViewModel.Image = imageUrl;
          
          console.log(imgUrl);
          console.log(this.productViewModel.Image);

        });
      }
    }
  }

  public keyupHandlerContentFunction(e: any) {
    this.productViewModel.Content = e;
  }


  


}
