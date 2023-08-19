import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResponseData } from 'src/app/_core/data/responseData';
import { UserRole } from 'src/app/_core/data/user/userRole';

export const getUserRoleState = createFeatureSelector<ResponseData<UserRole[]>>('userRole');

// ------------------------------Current User---------------------------------------
const selectUserRoles = (state: ResponseData<UserRole[]>) => (state.data);



export const getUserRoles = createSelector(getUserRoleState, selectUserRoles);



