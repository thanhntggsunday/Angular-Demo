import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTinymcComponent } from './simple-tinymc.component';

describe('SimpleTinymcComponent', () => {
  let component: SimpleTinymcComponent;
  let fixture: ComponentFixture<SimpleTinymcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTinymcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTinymcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
