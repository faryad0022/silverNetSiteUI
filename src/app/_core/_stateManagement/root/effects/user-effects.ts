import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAction from '../actions/index';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/_core/_services/auth.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }
  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromAction.Load_CurrentUser),
    mergeMap(() => this.authService.checkUserAuth()
      .pipe(
        map(user => (fromAction.Load_CurrentUser_Success({ currentUser: user }))),
        catchError(error => of(fromAction.Load_CurrentUser_Fail({ error }))),
      ))
  )
  );
}