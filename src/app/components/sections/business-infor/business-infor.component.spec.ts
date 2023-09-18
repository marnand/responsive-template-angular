import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInforComponent } from './business-infor.component';

describe('BusinessInforComponent', () => {
  let component: BusinessInforComponent;
  let fixture: ComponentFixture<BusinessInforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessInforComponent]
    });
    fixture = TestBed.createComponent(BusinessInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
