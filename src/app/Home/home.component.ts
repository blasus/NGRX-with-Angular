import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOAD_EMPLOYEE_ACTION } from 'src/store/Employee/Actions/employee.action';
import * as EmployeeSelectors from 'src/store/Employee/Selector/employee.selector';

@Component({
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  
  private readonly store = inject(Store);
  readonly loading = this.store.selectSignal(EmployeeSelectors.getEmployeeLoading);
  readonly employees = this.store.selectSignal(EmployeeSelectors.getEmployees);
  
  ngOnInit(): void {
    // load the employees from the server
    this.store.dispatch({ type: LOAD_EMPLOYEE_ACTION });
  }
}
