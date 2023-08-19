import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from '../routerStateUrl';
//export * from './authToken.selectors';
export * from './logged-in-user.selectors';
export * from './user-roles.selectors';

// -------------------------Router----------------------------------------
// tslint:disable-next-line:no-shadowed-variable
const selectRouterStateUrl = (state: RouterReducerState<RouterStateUrl>) => state.state;

const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerReducer');
const {
    selectCurrentRoute, // select the current route
    selectFragment, // select the current route fragment
    selectQueryParams, // select the current route query params
    selectQueryParam, // factory function to select a query param
    selectRouteParams, // select the current route params
    selectRouteParam, // factory function to select a route param
    selectRouteData, // select the current route data
    selectUrl, // select the current url
  } = getSelectors(getRouterState);


export const selectRouterParams = (router: RouterReducerState<RouterStateUrl>) => (router.state.params);
export const getRouterParams = createSelector(getRouterState, selectRouterParams);
export const getCurrentRoute = createSelector(getRouterState, selectCurrentRoute);
export const getQueryParams = createSelector(getRouterState, selectQueryParams);






