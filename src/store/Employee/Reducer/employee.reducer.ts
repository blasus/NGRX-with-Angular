import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { IEmployee } from './../Models/employee.model';
import { EmployeeActions } from '../Actions/employee.action';

export const employeeFeatureKey = 'employee';

export interface EmployeeState {
  loading: boolean;
  loaded: boolean;
  error: string;
  employees: IEmployee[];
}

export interface AllEmployeeState {
  employee: EmployeeState;
}


export const initialState: EmployeeState = {
  loading: false,
  loaded: false,
  error: '',
  employees: []
};

export const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.loadEmployees, state => ({ ...state, loading: true, loaded: false, error: '' })),
  on(EmployeeActions.loadedEmployees, (state, { employees }) => ({ ...state, loaded: true, loading: false, error: '', employees })),
);

export const getEmployeeLoaded = (state: EmployeeState) => state.loaded;
