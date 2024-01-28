import { inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, of, switchMap } from 'rxjs';
import { getEmployeeLoaded } from '../Reducer/employee.reducer';
import { IEmployee } from '../Models/employee.model';
import { InformationFetchSucceeded } from '../Actions/employee.action';
import { createEffect } from '@ngrx/effects';

/*
 * Functional effects defined here.
 * See: https://ngrx.io/guide/effects
 */

/**
 * This effect checks the mocked API call to fetch employees
 * (getEmployeeLoaded) has completed - returned a boolean value true.
 * If so, the effect then dispatches a new action notifying the result.
 */
export const loadEmployees = createEffect(
  (store = inject(Store<IEmployee>)) => 
    store
      .pipe(select(getEmployeeLoaded))
      .pipe(
        filter((loaded) => !!loaded),
        switchMap(() => {
          return of(new InformationFetchSucceeded(EMPLOYEE_INFO));
        })
      ),
  { functional: true }
);

const EMPLOYEE_INFO: IEmployee[] = [
  {
    department: 'HelathCare',
    id: '001',
    isMarried: true,
    name: 'Mike Stephen',
    salary: '480000',
  },
  {
    department: 'HelathCare',
    id: '002',
    isMarried: true,
    name: 'Mike Jhon',
    salary: '480000',
  },
  {
    department: 'HelathCare',
    id: '003',
    isMarried: true,
    name: 'Bless Stephen',
    salary: '480000',
  }
];
