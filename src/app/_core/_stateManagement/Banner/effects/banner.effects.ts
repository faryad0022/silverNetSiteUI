import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, mergeMap, withLatestFrom, filter } from 'rxjs/operators';
import *  as fromActions from '../actions';
import *  as fromStore from 'src/app/_core/_stateManagement/Banner';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { BannerService } from 'src/app/_core/_services/banner.service';
import { Store, select } from '@ngrx/store';
import { StatusStage } from '../../statusStage';
@Injectable()
export class BannerEffects {
    constructor(
        private actions$: Actions,
        private bannerService: BannerService,
        private alertService: ToastrService,
        private store: Store<fromStore.BannerManagementState>
    ) { }


    GetAllbanners$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.GetAllBanner),
        //che state if loaded then not dispat to it
        withLatestFrom(this.store.pipe(select(fromStore.getLoadStatus))),
        filter(([{ }, loadStatus]) => loadStatus === StatusStage.NOT_LOAD),
        mergeMap((action) => this.bannerService.getAllBanner().pipe(
            map((response) => {
                if(response.status === 'Success'){
                    return fromActions.GetAllBannerSuccess({response});
                }
                if(response.status === 'NoContent'){
                    return fromActions.GetAllBannerFail({response});
                }
            }),
            catchError((response) => {
                
                this.alertService.error('Unknown Error', 'Error');
                return of(fromActions.GetAllBannerFail({ response }));
            })
            ))));

    AddNewBanner$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.AddNewBanner),
        mergeMap((action) => this.bannerService.addNewBanner(action.Banner).pipe(
            map((response) => {
                if (response.status === 'Validation Error occured') {
                    this.alertService.error('Please check input fields....', 'Validation Error');
                    return fromActions.AddNewBannerFail({ response });

                }

                this.alertService.success('New banner is added', 'Success');
                return fromActions.AddNewBannerSuccess({ response });
            }),
            catchError((response) => {
                this.alertService.error(response, 'Error');
                return of(fromActions.AddNewBannerFail({ response }));
            })
        )
        )
    )
    );

    DeleteBanner$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.DeleteBanner),
        mergeMap((action) => this.bannerService.deleteBanner(action.id).pipe(
            map((response) => {
                if (response.status === 'NotFound') {
                    this.alertService.info('The banner is not found', 'Not Found');
                    return fromActions.DeleteBannerFail({ response });
                }

                this.alertService.success('Banner Status is changed', 'Success');
                return fromActions.DeleteBannerSuccess({ response });
            }),
            catchError((response) => {
                this.alertService.error(response, 'Error');
                return of(fromActions.DeleteBannerFail({ response }));
            })
        )
        )
    )
    );

    ChangeBannerStatus$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.ChangeBannerStatus),
        mergeMap((action) => this.bannerService.changeStatusBanner(action.id).pipe(
            map((response) => {
                if (response.status === 'NotFound') {
                    this.alertService.info('The banner is not found', 'Not Found');
                    return fromActions.ChangeBannerStatusFail({ response });
                }
                this.alertService.success('Banner Status is changed', 'Success');
                return fromActions.ChangeBannerStatusSuccess({ response });
            }),
            catchError((response) => {
                this.alertService.error(response, 'Error');
                return of(fromActions.ChangeBannerStatusFail({ response }));
            })
        )
        )
    )
    );

    UpdateBannerLink$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.UpdateBannerLink),
        mergeMap((action) => this.bannerService.updateBannerLink(action.updateBanerLink).pipe(
            map((response) => {
                if (response.status === 'NotFound') {
                    this.alertService.info('The banner is not found', 'Not Found');
                    return fromActions.UpdateBannerLinkFail({ response });
                }
                this.alertService.success('Banner Link is updated', 'Success');
                return fromActions.UpdateBannerLinkSuccess({ response });
            }),
            catchError((response) => {
                this.alertService.error(response, 'Error');
                return of(fromActions.UpdateBannerLinkFail({ response }));
            })
        )
        )
    )
    );

    UpdateBannerDescription$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.UpdateBannerDescription),
        mergeMap((action) => this.bannerService.updateBannerDescription(action.updateBanerDescription).pipe(
            map((response) => {
                if (response.status === 'NotFound') {
                    this.alertService.info('The banner is not found', 'Not Found');
                    return fromActions.UpdateBannerDescriptionFail({ response });
                }
                this.alertService.success('Banner Description is updated', 'Success');
                return fromActions.UpdateBannerDescriptionSuccess({ response });
            }),
            catchError((response) => {
                this.alertService.error(response, 'Error');
                return of(fromActions.UpdateBannerDescriptionFail({ response }));
            })
        )
        )
    )
    );


}