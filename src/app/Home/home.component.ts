import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IEmployee } from '../../store/Employee/Models/employee.model';
import { LOAD_EMPLOYEE_ACTION } from 'src/store/Employee/Actions/employee.action';
import * as EmployeeSelectors from 'src/store/Employee/Selector/employee.selector';
import { EmployeeState } from 'src/store/Employee/Reducer/employee.reducer';

@Component({
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  
  employees$!: Observable<IEmployee[]>;
  
  constructor(private store: Store<{ employee: EmployeeState }>) {
    this.employees$ = this.store.select(EmployeeSelectors.getEmployees);
  }
  
  ngOnInit(): void {
    // load the employees from the server
    this.store.dispatch({ type: LOAD_EMPLOYEE_ACTION });
  }
}
