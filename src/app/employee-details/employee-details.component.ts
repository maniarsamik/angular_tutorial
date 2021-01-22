import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = [
    { id: "1", employee_name: "Gopal Joshi", age: 37, gender: "Male" },
    { id: "2", employee_name: "Samik Maniar", age: 38, gender: "Male" },
    { id: "3", employee_name: "Vimal Chauhan", age: 35, gender: "Male" },
    { id: "4", employee_name: "Vivek Joshi", age: 22, gender: "Male" },
    { id: "5", employee_name: "Rashid Shaikh", age: 32, gender: "Male" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
