import { Component, OnInit } from '@angular/core';
import { EmployeeApiDataService } from '../employee-api-data.service';
@Component({
  selector: 'app-employee-listing-using-api',
  templateUrl: './employee-listing-using-api.component.html',
  styleUrls: ['./employee-listing-using-api.component.css']
})
export class EmployeeListingUsingApiComponent implements OnInit {

  public employeesApi: any = [];
  constructor(private employeeService: EmployeeApiDataService) { }

  ngOnInit(): void {
    this.employeeService.getApiEmployees().subscribe(data=>this.employeesApi=data);
  }
}
