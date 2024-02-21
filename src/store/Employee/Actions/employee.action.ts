import { createAction, props } from '@ngrx/store';
import { IEmployee } from '../Models/employee.model';

export const LOAD_EMPLOYEE_ACTION = '[Employee] Load Employees';
export const LOADED_EMPLOYEE_ACTION = '[Employee] Loaded Employees';
export const EMPLOYEE_FAILURE_ACTION = '[Employee] Employee Action Failure';
export const ADD_EMPLOYEE_ACTION = '[Employee] Add Employee';
export const ADDED_EMPLOYEE_ACTION = '[Employee] Added Employee';
export const UPDATE_EMPLOYEE_ACTION = '[Employee] Update Employee';

const loadEmployees = createAction(LOAD_EMPLOYEE_ACTION);
const loadedEmployees = createAction(LOADED_EMPLOYEE_ACTION, props<{ employees: IEmployee[] }>());
const employeeActionFailure = createAction(EMPLOYEE_FAILURE_ACTION, props<{ errorMsg: string }>());
const addEmployee = createAction(ADD_EMPLOYEE_ACTION, props<{ employee: IEmployee }>());
const addedEmployee = createAction(ADDED_EMPLOYEE_ACTION, props<{ employee: IEmployee }>());
const updateEmployee = createAction(UPDATE_EMPLOYEE_ACTION, props<{ employee: IEmployee }>());

export const EmployeeActions = {
  loadEmployees,
  loadedEmployees,
  employeeActionFailure,
  addEmployee,
  addedEmployee,
  updateEmployee
}

