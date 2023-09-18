import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, first, tap } from 'rxjs';
import * as fromStore from 'src/app/_core/_stateManagement/Home';
import { StatusStage } from '../_stateManagement/statusStage';

export const homedataResolver: ResolveFn<{}> = (route, state) => {

  return inject(Store<fromStore.HomeManagementState>).pipe(
    select(fromStore.getLoadStatus),
    tap((loaded) => {
      if (loaded !== StatusStage.LOADED) {
        inject(Store<fromStore.HomeManagementState>).dispatch(fromStore.GetAllHome())
      }
    }),
    filter((loaded) => {
      if (loaded === StatusStage.LOADED) {
        return true;
      }
      return false
    }),
    first()
  );
};
