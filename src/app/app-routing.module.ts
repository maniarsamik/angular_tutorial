import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmployeeDetailsUsingApiComponent } from './employee-details-using-api/employee-details-using-api.component';
import { EmployeeListingUsingApiComponent } from './employee-listing-using-api/employee-listing-using-api.component';
import { SingleEmployeeDetailsComponent } from './single-employee-details/single-employee-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'employeelisting', pathMatch:'full' },
  { path: 'employeelisting', component: EmployeeListingUsingApiComponent, canActivate: [AuthGuard] },
  { path: 'employeedetails', component: EmployeeDetailsUsingApiComponent },
  { path: 'singleemployee/:id', component: SingleEmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
