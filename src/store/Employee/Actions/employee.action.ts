import { Action } from '@ngrx/store';
import { IEmployee } from '../Models/employee.model';

export enum ActionTypes {
  LOAD_EMPLOYEE_INFORMATION = 'EMPLOYEE_INFORMATION/LOAD',
  INFORMATION_FETCH_SUCCEEDED = 'INFORMATION_FETCH/SUCCEEDED',
}

export class LoadEmployeeInformation implements Action {
  readonly type = ActionTypes.LOAD_EMPLOYEE_INFORMATION;
  constructor() { }
}

export class InformationFetchSucceeded implements Action {
  readonly type = ActionTypes.INFORMATION_FETCH_SUCCEEDED;
  constructor(public payload: IEmployee[]) { }
}

export type EmployeeApiActions = LoadEmployeeInformation
  | InformationFetchSucceeded;
