import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCategoryAddEditComponent } from './post-category-add-edit.component';

describe('PostCategoryAddEditComponent', () => {
  let component: PostCategoryAddEditComponent;
  let fixture: ComponentFixture<PostCategoryAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCategoryAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCategoryAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
