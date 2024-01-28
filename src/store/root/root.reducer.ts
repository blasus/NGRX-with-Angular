import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { createReducer } from '@ngrx/store';
import { RouterStateURL } from './custom-route-serializer';
import { environment } from 'src/environments/environment';

export interface AppState {
  role: string;
}

export interface RouterState {
  routerReducer: RouterReducerState<RouterStateURL>;
}

export const initialState: AppState = {
  role: !environment.production ? 'Developer' : 'User'
}

export const appReducer = createReducer({
  ...initialState,
  router: routerReducer
});

// root selectors
export const getRouterState = (state: RouterState) => state.routerReducer;


