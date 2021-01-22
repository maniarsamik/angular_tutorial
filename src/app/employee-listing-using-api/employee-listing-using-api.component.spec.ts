import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListingUsingApiComponent } from './employee-listing-using-api.component';

describe('EmployeeListingUsingApiComponent', () => {
  let component: EmployeeListingUsingApiComponent;
  let fixture: ComponentFixture<EmployeeListingUsingApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListingUsingApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListingUsingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
