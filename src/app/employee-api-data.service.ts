import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { EmployeeType } from './employeetype';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeApiDataService {

  constructor(private http: HttpClient) { }
  private url = "../assets/employee.json";
  // public url = "http://dummy.restapiexample.com/api/v1/employees";
  getApiEmployees() : Observable<EmployeeType[]> {
    return this.http.get<EmployeeType[]>(this.url).pipe(catchError(this.httpCallErrorHandling))
    return this.http.get<EmployeeType[]>(`http://dummy.restapiexample.com/api/v1/employees`).pipe(catchError(this.httpCallErrorHandling))
  }
  httpCallErrorHandling(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(error.message);
  }
}
