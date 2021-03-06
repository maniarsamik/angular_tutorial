import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }
  getEmployees() {
    return [
      { id: "1", employeename: "Gopal Joshi", age: 37, gender: "Male" },
      { id: "2", employeename: "Samik Maniar", age: 38, gender: "Male" },
      { id: "3", employeename: "Vimal Chauhan", age: 35, gender: "Male" },
      { id: "4", employeename: "Vivek Joshi", age: 22, gender: "Male" },
      { id: "5", employeename: "Rashid Shaikh", age: 32, gender: "Male" },
    ]
  }
}
