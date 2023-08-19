import { Action, createReducer, on } from '@ngrx/store';
import * as userAction from '../actions/index';
import { ResponseData } from 'src/app/_core/data/responseData';
import { UserRole } from 'src/app/_core/data/user/userRole';

const initialUserState: ResponseData<UserRole[]> = {
    status: '',
    errors: [],
    data:[]

};

export const userReducer = createReducer(
    initialUserState,
    on(userAction.Reset_UserRoles, (state) => (state = initialUserState)),
    on(userAction.Load_UserRoles, (state,{userId}) => ({ ...state })),
    on(userAction.Load_UserRoles_Success, (state, { userRole }) => (
        state = userRole
    )),    
    on(userAction.Load_UserRoles_Fail, (state, { error }) => ({ ...state, error })),

);

export function UserRoleReducer(state: ResponseData<UserRole[]> | undefined, action: Action) {
    return userReducer(state, action);
}
