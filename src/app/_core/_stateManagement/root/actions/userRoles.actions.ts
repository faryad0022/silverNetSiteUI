import { createAction, props } from '@ngrx/store';
import { ResponseData } from 'src/app/_core/data/responseData';
import { UserRole } from 'src/app/_core/data/user/userRole';



export const Reset_UserRoles = createAction(
    '[User Roles] Reset Current User Roles'
);

export const Load_UserRoles = createAction(
    '[User Roles] Load Current User Roles',
    props<{
        userId: string;
      }>()
);
export const Load_UserRoles_Success = createAction(
    '[User Roles] Load Current User Roles Success',
    props<{userRole: ResponseData<UserRole[]>}>()
);
export const Load_UserRoles_Fail = createAction(
    '[Check Auth] Load Current User Roles Fail',
    props<{error: string}>()

);



