import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrentUser } from 'src/app/_core/data/Auth/currentUser';
import { ResponseData } from 'src/app/_core/data/responseData';

export const getUserState = createFeatureSelector<ResponseData<CurrentUser>>('currentUser');

// ------------------------------Current User---------------------------------------
const selectCurrentUser = (state: ResponseData<CurrentUser>) => (state.data);
const selectCurrentUserId = (state:   ResponseData<CurrentUser>) => (state.data.id);
const selectCurrentUserEmail = (state:   ResponseData<CurrentUser>) => (state.data.email);
const selectCurrentUserToken = (state:   ResponseData<CurrentUser>) => (state.data.token);


export const getCurrentUser = createSelector(getUserState, selectCurrentUser);
export const getCurrentUserId = createSelector(getUserState, selectCurrentUserId);
export const getCurrentUserEmail = createSelector(getUserState, selectCurrentUserEmail);
export const getCurrentUserToken = createSelector(getUserState, selectCurrentUserToken);


