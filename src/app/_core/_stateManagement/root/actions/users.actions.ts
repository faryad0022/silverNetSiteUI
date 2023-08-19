import { createAction, props } from '@ngrx/store';
import { CurrentUser } from 'src/app/_core/data/Auth/currentUser';
import { ResponseData } from 'src/app/_core/data/responseData';

export const Edit_CurrentUser = createAction(
    '[Logged In] Edit Current User',
    props<{currentUser: ResponseData<CurrentUser>}>());

export const Reset_CurrentUser = createAction(
    '[Logged Out] Reset Current User'
);

export const Load_CurrentUser = createAction(
    '[Check Auth] Load Current User'
);
export const Load_CurrentUser_Success = createAction(
    '[Check Auth] Load Current User Success',
    props<{currentUser: ResponseData<CurrentUser>}>()
);
export const Load_CurrentUser_Fail = createAction(
    '[Check Auth] Load Current User Fail',
    props<{error: string}>()

);



