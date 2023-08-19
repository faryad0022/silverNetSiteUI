import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAction from '../actions/index';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/_core/_services/auth.service';
import { UserService } from 'src/app/_core/_services/user.service';

@Injectable()
export class UserRoleEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }
  loadUserRoles$ = createEffect(() => this.actions$.pipe(
    ofType(fromAction.Load_UserRoles),
    mergeMap((action) => this.userService.GetUserRoles(action.userId)
      .pipe(
        map(userRoles => (fromAction.Load_UserRoles_Success({ userRole: userRoles }))),
        catchError(error => of(fromAction.Load_UserRoles_Fail({ error }))),
      ))
  )
  );
}