import { ResolveFn } from '@angular/router';
import { HomeDTO } from '../data/homeData/homeDTO';
import { Store, select } from '@ngrx/store';
import * as fromStore from 'src/app/_core/_stateManagement/Home';
import { inject } from '@angular/core';
import { Observable, filter, first, tap } from 'rxjs';
import { StatusStage } from '../_stateManagement/statusStage';

export const homedataResolver: ResolveFn<{}> = (route, state) => {
  
  return inject(Store<fromStore.HomeManagementState>).pipe(
    select(fromStore.getLoadStatus),
    tap((loaded)=>{
      if(loaded !== StatusStage.LOADED){
        inject(Store<fromStore.HomeManagementState>).dispatch(fromStore.GetAllHome())
      }
    }),
    filter((loaded)=>{
      if(loaded === StatusStage.LOADED){
        return true;
      }
      return false
    }),
    first()
   );
};
