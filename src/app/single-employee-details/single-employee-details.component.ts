import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeApiDataService } from '../employee-api-data.service';

@Component({
  selector: 'app-single-employee-details',
  templateUrl: './single-employee-details.component.html',
  styleUrls: ['./single-employee-details.component.css']
})
export class SingleEmployeeDetailsComponent implements OnInit {

  public employeesApi: any = [];
  private employeeApiId: number;
  constructor(private employeeService: EmployeeApiDataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getApiEmployees().subscribe(data => this.employeesApi = data);
    // this.employeeApiId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.employeeApiId = parseInt(params.get('id'));
    })
  }
  next() {
    this.router.navigate(['../', this.employeeApiId + 1], {relativeTo: this.activatedRoute});
  }
  previous() {
    this.router.navigate(['../', this.employeeApiId - 1], { relativeTo: this.activatedRoute });
  }
}
