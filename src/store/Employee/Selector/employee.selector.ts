import { createSelector } from '@ngrx/store';
import {
  AllEmployeeState,
  EmployeeState
} from '../Reducer/employee.reducer';

export const getAllEmployeeInfo = (state: AllEmployeeState) => state.employee

/**
 * Get All employees
 */
export const getEmployees = createSelector(
  getAllEmployeeInfo,
  (state: EmployeeState) => state.employees
);
