import { ActionReducerMap } from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { DecodedTokenState } from '../decodedToken.state';
import { authTokenReducers } from './authToken.reducers';
import { UserReducer } from './user.reducer';
import { ResponseData } from 'src/app/_core/data/responseData';
import { CurrentUser } from 'src/app/_core/data/Auth/currentUser';
import { UserRole } from 'src/app/_core/data/user/userRole';
import { UserRoleReducer } from './user-role.reducer';

export interface State {
    routerReducer: RouterState,
    authToken: DecodedTokenState,
    currentUser: ResponseData<CurrentUser>
    userRole:ResponseData<UserRole[]>
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: routerReducer,
    authToken: authTokenReducers,
    currentUser: UserReducer,
    userRole:UserRoleReducer
}