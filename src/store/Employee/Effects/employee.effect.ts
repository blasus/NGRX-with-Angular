import { inject } from '@angular/core';
import { EmployeeActions } from '../Actions/employee.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeeService } from 'src/app/Employee/employee.service';
import { catchError, exhaustMap, map, of } from 'rxjs';

/*
 * Functional effects defined here.
 * See: https://ngrx.io/guide/effects
 */

/**
 * This effect checks the mocked API call to fetch employees
 * (getEmployeeLoaded) has completed - returned a boolean value true.
 * If so, the effect then dispatches a new action notifying the result.
 */
export const loadEmployees$ = createEffect(
  (actions$ = inject(Actions), employeeService = inject(EmployeeService)) => {
    return actions$.pipe(
      ofType(EmployeeActions.loadEmployees),
      exhaustMap(() => 
        employeeService.getEmployees().pipe(
          map(employees => EmployeeActions.loadedEmployees({ employees })),
          catchError((error: { message: string }) => 
            of(EmployeeActions.employeesLoadedFailure({ errorMsg: error.message }))
          )
        )
      )
    )
  },  
  { functional: true }
);
