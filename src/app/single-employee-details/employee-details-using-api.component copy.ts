import { Component, OnInit } from '@angular/core';
import { EmployeeApiDataService } from '../employee-api-data.service';
@Component({
  selector: 'app-employee-details-using-api',
  templateUrl: './employee-details-using-api.component.html',
  styleUrls: ['./employee-details-using-api.component.css']
})
export class EmployeeDetailsUsingApiComponent implements OnInit {

  public employeesApi: any = [];
  public error: string;
  constructor(private employeeService: EmployeeApiDataService) { }

  ngOnInit(): void {
    this.employeeService.getApiEmployees().subscribe(data=>this.employeesApi=data, error =>this.error = error);
  }

}
