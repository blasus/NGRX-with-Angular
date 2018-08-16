import { Component } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { IEmployee } from '../../store/Employee/Models/employee.model';
import { Store } from '../../../node_modules/@ngrx/store';
import { getAllEmployeesSelector } from '../../store/Employee/Selector/employee.selector';

@Component({
  templateUrl: './home.component.html',
})

export class HomeComponent  {
  employeeData$: Observable<IEmployee[]>

  constructor(public store: Store<IEmployee>) {
     this.employeeData$ = this.store.select(getAllEmployeesSelector);
  }
}
