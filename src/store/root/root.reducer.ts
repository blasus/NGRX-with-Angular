import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, createReducer, createSelector } from '@ngrx/store';
import { RouterStateURL } from './custom-route-serializer';
import { environment } from 'src/environments/environment';

/**
 * State containing the user role.
 * This is just a representation of any dynamic information
 * possibly loaded on the app bootstrap and stored as initial state.
 * For a more sophisticated app, this could be instead for instance
 * account information on login/signup, configuration keys from server, etc. 
 */
export interface UserRoleState {
  role: string;
}

export interface AppState {
  role: UserRoleState,
  router: RouterReducerState<RouterStateURL>
}

export const initialState: UserRoleState = {
  role: !environment.production ? 'Developer' : 'User'
};

/**
 * Create the reducer for the user role.
 */
export const userRoleReducer = createReducer(initialState);
/**
 * Import the root reducers into the map to be passed into
 * the StoreModule. 
 */
export const appReducers: ActionReducerMap<AppState> = {
  role: userRoleReducer,
  router: routerReducer
}

// root selectors
export const getRoleState = (state: AppState) => state.role;
export const getRouterState = (state: AppState) => state.router;

export const selectRole = createSelector(
  getRoleState,
  (state) => state.role
);


