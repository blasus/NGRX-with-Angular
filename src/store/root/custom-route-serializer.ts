import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from "@angular/router";
import { RouterStateSerializer } from "@ngrx/router-store";
/*
 * The RouterStateSnapshot is a large complex structure, 
 * containing many pieces of information about the current state and what's rendered by the router.
 * This can cause performance issues when used with the Store Devtools. 
 * In most cases, you may only need a piece of information from the RouterStateSnapshot. 
 * In order to pare down the RouterStateSnapshot provided during navigation, 
 * you provide a custom serializer for the snapshot to only return what you need to be added 
 * to the payload and store.
 */

export interface RouterStateURL {
  url: string;
  queryParams: Params;
  params: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateURL> {
  serialize(routerState: RouterStateSnapshot): RouterStateURL {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, queryParams, params };
  }
}