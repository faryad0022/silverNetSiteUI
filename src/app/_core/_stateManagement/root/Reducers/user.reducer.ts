import { Action, createReducer, on } from '@ngrx/store';
import * as userAction from '../actions/index';
import { ResponseData } from 'src/app/_core/data/responseData';
import { CurrentUser } from 'src/app/_core/data/Auth/currentUser';

const initialUserState: ResponseData<CurrentUser> = {
    status:'',
    errors:null,
    data:{
        email: '',
        token: '',
        id: '',
        userName:'',
        firstName:'',
        lastName:'',
        phoneNumber:'',
        imageName:'',
        emailConfirmed:false,
        authResponseResult:null
    }

};

export const userReducer = createReducer(
    initialUserState,
    on(userAction.Edit_CurrentUser, (state, { currentUser }) => (state = currentUser)),
    on(userAction.Reset_CurrentUser, (state) => (state = initialUserState)),
    on(userAction.Load_CurrentUser, (state) => ({ ...state })),
    on(userAction.Load_CurrentUser_Success, (state, { currentUser }) => (state = currentUser)),
    on(userAction.Load_CurrentUser_Fail, (state, { error }) => ({ ...state, error })),

);

export function UserReducer(state: ResponseData<CurrentUser> | undefined, action: Action) {
    return userReducer(state, action);
}
