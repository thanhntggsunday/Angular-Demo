import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from '../../../core/services/utility.service';
import { DataService } from '../../../core/services/data.service';
import { UploadService } from '../../../core/services/upload.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service';
import { SystemConstants } from '../../../core/common/system.constants';

@Component({
  selector: 'app-post-add-edit',
  templateUrl: './post-add-edit.component.html',
  styleUrls: ['./post-add-edit.component.css']
})
export class PostAddEditComponent implements OnInit {

  @ViewChild("imagePath") imagePath;
  public postViewModel: any = {};
  public title: string = '';
  public addOrEdit: string;
  public entity: any;
  public uploadFileData: any = {};
  public categories: any[];
  public postCategoryViewModel: any = {};
  

  constructor(private _utilityService: UtilityService,
    private _dataService: DataService,
    private _activatedRoute: ActivatedRoute,
    private uploadService: UploadService, 
    private _notificationService: NotificationService) {

    this.addOrEdit = this._activatedRoute.snapshot.params.addOrEdit;
    var id = this._activatedRoute.snapshot.params.id;

    this.postViewModel.Content = '';

    if (this.addOrEdit == 'add') {
      this.title = 'THÊM MỚI POST';
    }
    else {
      this.title = 'CẬP NHẬT POST';
      this.postViewModel.ID = id;

      this._dataService.post(SystemConstants.API_POST_SERVICE_GET_BY_ID, 
        JSON.stringify(this.postViewModel))
      .subscribe((response: any) => {
        this.postViewModel = response;        
      }, error => this._dataService.handleError(error));

    }
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._dataService.post(SystemConstants.API_POST_CATEGORY_SERVICE_GET_ALL,
      this.postCategoryViewModel)
      .subscribe((response: any) => {
        this.categories = response.PostCategoryDTOs;        
      },
        (error) => {
          console.log(error);
          this._utilityService.navigateToLogin();
        }
      );

  }

  public goBack() {
    this._utilityService.navigate('/main/post/index');
  }

  

  //Save change for modal popup
  public saveChanges(valid: boolean) {
    if (valid) {
      if (this.addOrEdit == 'add') {
        this._dataService.post(SystemConstants.API_POST_SERVICE_CREATE, 
          JSON.stringify(this.postViewModel))
          .subscribe((response: any) => {
            this.postViewModel = response;
            this._notificationService.printSuccessMessage(this.postViewModel.ReturnMessage[0]);
            this._utilityService.navigate('/main/post/index');
  
          },
          error => this._dataService.handleError(error));
      } 
      else {
        this._dataService.post(SystemConstants.API_POST_SERVICE_UPDATE, 
          JSON.stringify(this.postViewModel))
          .subscribe((response: any) => {
            this.postViewModel = response;
            this._notificationService.printSuccessMessage(this.postViewModel.ReturnMessage[0]);
            this._utilityService.navigate('/main/post/index');
  
          },
          error => this._dataService.handleError(error));
      }
      

    }
  }

  
  public savePostImage(isValid = true) {
    if (isValid) {
      let fi = this.imagePath.nativeElement;
      if (fi.files.length > 0) {
        this.uploadFileData.fileType = '/UploadedFiles/posts';

        this.uploadService.postWithFile(SystemConstants.API_UPLOAD_SERVICE_UPLOAD_FILE, this.uploadFileData, fi.files)
        .then((imageUrl: string) => {
          var imgUrl = imageUrl;
          this.postViewModel.Image = imageUrl;
          
          console.log(imgUrl);
          console.log(this.postViewModel.Image);

        });
      }
    }
  }

  public keyupHandlerContentFunction(e: any) {
    this.postViewModel.Content = e;
  }


  


}
