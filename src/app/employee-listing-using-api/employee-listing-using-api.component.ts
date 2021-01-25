import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeApiDataService } from '../employee-api-data.service';
@Component({
  selector: 'app-employee-listing-using-api',
  templateUrl: './employee-listing-using-api.component.html',
  styleUrls: ['./employee-listing-using-api.component.css']
})
export class EmployeeListingUsingApiComponent implements OnInit {

  public employeesApi: any = [];
  public error: string;
  constructor(private employeeService: EmployeeApiDataService, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getApiEmployees().subscribe(data => this.employeesApi = data, error => this.error = error);
  }
  selectedEmployee(id) {
    this.router.navigate(['singleemployee', id]);
    console.log(id);
  }
}
