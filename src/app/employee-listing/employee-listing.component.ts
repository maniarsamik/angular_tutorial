import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {
  public employees = [
    { id: "1", employee_name: "Gopal Joshi", Age: 37, Gender: "Male" },
    { id: "2", employee_name: "Samik Maniar", Age: 38, Gender: "Male" },
    { id: "3", employee_name: "Vimal Chauhan", Age: 35, Gender: "Male" },
    { id: "4", employee_name: "Vivek Joshi", Age: 22, Gender: "Male" },
    { id: "5", employee_name: "Rashid Shaikh", Age: 32, Gender: "Male" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
