import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsUsingApiComponent } from './employee-details-using-api.component';

describe('EmployeeDetailsUsingApiComponent', () => {
  let component: EmployeeDetailsUsingApiComponent;
  let fixture: ComponentFixture<EmployeeDetailsUsingApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsUsingApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsUsingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
