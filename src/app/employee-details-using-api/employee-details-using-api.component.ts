import { Component, OnInit } from '@angular/core';
import { EmployeeApiDataService } from '../employee-api-data.service';
@Component({
  selector: 'app-employee-details-using-api',
  templateUrl: './employee-details-using-api.component.html',
  styleUrls: ['./employee-details-using-api.component.css']
})
export class EmployeeDetailsUsingApiComponent implements OnInit {

  public employeesApi: any = [];
  constructor(private employeeService: EmployeeApiDataService) { }

  ngOnInit(): void {
    this.employeesApi = this.employeeService.getApiEmployees();
  }

}
