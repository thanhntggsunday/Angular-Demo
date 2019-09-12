import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryAddEditComponent } from './product-category-add-edit.component';

describe('ProductCategoryAddEditComponent', () => {
  let component: ProductCategoryAddEditComponent;
  let fixture: ComponentFixture<ProductCategoryAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
