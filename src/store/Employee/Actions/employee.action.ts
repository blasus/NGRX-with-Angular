import { createAction, props } from '@ngrx/store';
import { IEmployee } from '../Models/employee.model';

export const LOAD_EMPLOYEE_ACTION = '[Employee] Load Employees';
export const LOADED_EMPLOYEE_ACTION = '[Employee] Loaded Employees';
export const EMPLOYEE_LOADED_FAILURE_ACTION = '[Employee] Employees Loaded Failure';
export const UPDATE_EMPLOYEE_ACTION = '[Employee] Update Employee';

const loadEmployees = createAction(LOAD_EMPLOYEE_ACTION);
const loadedEmployees = createAction(LOADED_EMPLOYEE_ACTION, props<{ employees: IEmployee[] }>());
const employeesLoadedFailure = createAction(EMPLOYEE_LOADED_FAILURE_ACTION, props<{ errorMsg: string }>());
const updateEmployee = createAction(UPDATE_EMPLOYEE_ACTION, props<{ employee: IEmployee }>());

export const EmployeeActions = {
  loadEmployees,
  loadedEmployees,
  employeesLoadedFailure,
  updateEmployee
}

