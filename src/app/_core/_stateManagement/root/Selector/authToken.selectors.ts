import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DecodedTokenState } from '../decodedToken.state';

// ------------------------------AuthToken---------------------------------------
const selectDecodedToken = (state: DecodedTokenState) => (state.decodedToken);
const selectNameId = (state: any) => (state.nameid);
const selectUserName = (state: any) => (state.unique_name);
const selectRoles = (state: any) => (state.role);
export const getDecodedTokenState = createFeatureSelector<DecodedTokenState>('authToken');
export const getDecodedToken = createSelector(getDecodedTokenState, selectDecodedToken);
export const getUserId = createSelector(getDecodedToken, selectNameId);
export const getUserRoles = createSelector(getDecodedToken, selectRoles);
export const getUserName = createSelector(getDecodedToken, selectUserName);

