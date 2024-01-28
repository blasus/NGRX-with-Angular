import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { StoreRouterConnectingModule, provideRouterStore } from '@ngrx/router-store';
import { appReducers } from './store/root/root.reducer';
import {
  ActionReducer,
  MetaReducer,
  StoreModule,
  provideStore
} from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.route';
import { provideHttpClient } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { CustomSerializer } from './store/root/custom-route-serializer';

if (environment.production) {
  enableProdMode();
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<any>[] = [
  debug
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore(appReducers, { metaReducers }),
    provideRouterStore({
      serializer: CustomSerializer
    }),
    provideEffects(),
    provideHttpClient(),
    importProvidersFrom([
      StoreModule.forRoot(appReducers, { metaReducers }),
      EffectsModule.forRoot([]),
      StoreRouterConnectingModule.forRoot({
        serializer: CustomSerializer
      }),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: true
      }),
    ])
  ]
});
