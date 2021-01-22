import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { CreditcardofferDirective } from './creditcardoffer.directive';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDataService } from './employee-data.service';
import { EmployeeApiDataService } from './employee-api-data.service';
import { EmployeeListingUsingApiComponent } from './employee-listing-using-api/employee-listing-using-api.component';
import { EmployeeDetailsUsingApiComponent } from './employee-details-using-api/employee-details-using-api.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DirectiveExampleComponent,
    CustomdirectiveComponent,
    CreditcardofferDirective,
    EmployeeListingComponent,
    EmployeeDetailsComponent,
    EmployeeListingUsingApiComponent,
    EmployeeDetailsUsingApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [EmployeeDataService, EmployeeApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }