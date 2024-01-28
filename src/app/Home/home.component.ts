import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IEmployee } from '../../store/Employee/Models/employee.model';
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
