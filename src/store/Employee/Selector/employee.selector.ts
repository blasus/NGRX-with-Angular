import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AllEmployeeState, employeeFeatureKey, getEmployeeLoaded, selectAllEmployee, selectEmployeeEntities } from '../Reducer/employee.reducer';

export const getAllEmployeeInfo = createFeatureSelector<AllEmployeeState>(employeeFeatureKey);

export const getEmployeeState = createSelector(
  getAllEmployeeInfo,
  (state: AllEmployeeState) => state.employee
);

/**
 * Gets all Employee entities
 */
export const getAllEmployeeEntitiesSelector = createSelector(
  getEmployeeState, selectEmployeeEntities);

/**
 * Gets all Employee locations
 */ 
export const getAllEmployeesSelector = createSelector(
  getEmployeeState,
  selectAllEmployee
);

/**
 * Gets the loaded employee flag.
 */
export const getEmployeeLoadedSelector = createSelector(
  getEmployeeState,
  getEmployeeLoaded
);
