import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducerMap } from '@ngrx/store';
import { IEmployee } from './../Models/employee.model';
import { ActionTypes, EmployeeApiActions } from '../Actions/employee.action';

export const employeeFeatureKey = 'employee';

const employeeAdapter = createEntityAdapter<IEmployee>();

export interface AllEmployeeState {
  employee: EmployeeState;
}

export const EmployeeReducerModule: ActionReducerMap<AllEmployeeState> = {
  employee: employeeReducer,
}

export interface EmployeeState extends EntityState<IEmployee> {
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const EMPLOYEE_INITIAL_STATE: EmployeeState = employeeAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: '',
});

export function employeeReducer(
  state = EMPLOYEE_INITIAL_STATE,
  action: EmployeeApiActions
): EmployeeState {
  
  switch (action.type) {
    case ActionTypes.LOAD_EMPLOYEE_INFORMATION: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case ActionTypes.INFORMATION_FETCH_SUCCEEDED: {
      return employeeAdapter.addMany(action.payload, {
        ...state,
        loaded: true,
        loading: false,
        error: '',
      });
    }
    default: 
      return state;
  }
}

export const {
  selectEntities: selectEmployeeEntities,
  selectAll: selectAllEmployee,
  selectIds: selectArtifactsIds,
} = employeeAdapter.getSelectors();

export const getEmployeeLoaded = (state: EmployeeState) => state.loaded;
