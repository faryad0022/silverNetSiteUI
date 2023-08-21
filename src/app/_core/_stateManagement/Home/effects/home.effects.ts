import { Injectable, effect } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, mergeMap, withLatestFrom, filter, exhaustMap, concatMap } from 'rxjs/operators';
import *  as fromActions from '../actions';
import *  as fromStore from 'src/app/_core/_stateManagement/Home';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { Store, select } from '@ngrx/store';
import { StatusStage } from '../../statusStage';
import { HomePageService } from 'src/app/_core/_services/home-page.service';
@Injectable()
export class HomeEffects {
    constructor(
        private actions$: Actions,
        private homeService: HomePageService,
        private alertService: ToastrService,
        private store: Store<fromStore.HomeManagementState>
    ) { }


    GetAllHomes$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.GetAllHome),
        //che state if loaded then not dispat to it
        withLatestFrom(this.store.pipe(select(fromStore.getLoadStatus))),
        filter(([{ }, loadStatus]) => loadStatus === StatusStage.NOT_LOAD),
        exhaustMap((action) => this.homeService.getAllHomeData().pipe(
            map((response) => {
                if(response.status === 'Success'){
                    return fromActions.GetAllHomeSuccess({response});
                }
                if(response.status === 'NoContent'){
                    return fromActions.GetAllHomeFail({response});
                }
                return fromActions.GetAllHomeFail({response});

            }),
            catchError((response) => {
                
                this.alertService.error('Unknown Error', 'Error');
                return of(fromActions.GetAllHomeFail({ response }));
            })
            ))));



}