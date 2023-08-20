import { createAction, props } from '@ngrx/store';
import { HomeDTO } from 'src/app/_core/data/homeData/homeDTO';
import { ResponseData } from 'src/app/_core/data/responseData';

export const GetAllHome = createAction('[Home Page] GetAll');

export const GetAllHomeSuccess = createAction(
  '[Home Page] GetAll Success',
  props<{
    response: ResponseData<HomeDTO>;
  }>()
);
export const GetAllHomeFail = createAction(
  '[Home Page] GetAll Fail',
  props<{
    response: ResponseData<HomeDTO>;
  }>()
);

export const Reset = createAction('[Home Page] Reset');
