import { createAction, props } from '@ngrx/store';
import { BannerDTO } from 'src/app/_core/data/banner/bannerDTO';
import { CreateBannerDTO } from 'src/app/_core/data/banner/createBannerDTO';
import { UpdateBannerDTO } from 'src/app/_core/data/banner/updateBannerDTO';
import { UpdateBannerLinkDTO } from 'src/app/_core/data/banner/updateBannerDescription';
import { UpdateBannerDescriptionDTO } from 'src/app/_core/data/banner/updateBannerLinkDTO';
import { ResponseData } from 'src/app/_core/data/responseData';

export const GetAllBanner = createAction('[Banner Page] GetAll');

export const GetAllBannerSuccess = createAction(
  '[Banner Page] GetAll Success',
  props<{
    response: ResponseData<BannerDTO[]>;
  }>()
);
export const GetAllBannerFail = createAction(
  '[Banner Page] GetAll Fail',
  props<{
    response: ResponseData<BannerDTO[]>;
  }>()
);
export const AddNewBanner = createAction(
  '[Banner Page] Add New Banner',
  props<{
    Banner: CreateBannerDTO;
  }>()
);
export const AddNewBannerSuccess = createAction(
  '[Banner Page] Add New Banner Success',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);
export const AddNewBannerFail = createAction(
  '[Banner Page] Add New Banner Fail',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);

export const UpdateBanner = createAction(
  '[Banner Page] Update Banner',
  props<{
    Banner: UpdateBannerDTO;
  }>()
);
export const UpdateBannerSuccess = createAction(
  '[Banner Page] Update Banner Success',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);
export const UpdateBannerFail = createAction(
  '[Banner Page] Update Banner Fail',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);


export const DeleteBanner = createAction(
  '[Banner Page] Delete Banner',
  props<{
    id: number;
  }>()
);
export const DeleteBannerSuccess = createAction(
  '[Banner Page] Delete Banner Success',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);
export const DeleteBannerFail = createAction(
  '[Banner Page] Delete Banner Fail',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);


export const ChangeBannerStatus = createAction(
  '[Banner Page] Change Banner Status',
  props<{
    id: number;
  }>()
);
export const ChangeBannerStatusSuccess = createAction(
  '[Banner Page] Change Banner Status Success',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);
export const ChangeBannerStatusFail = createAction(
  '[Banner Page] Change Banner Status Fail',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);

export const UpdateBannerLink = createAction(
  '[Banner Page] Update Banner Link',
  props<{
    updateBanerLink: UpdateBannerLinkDTO;
  }>()
);
export const UpdateBannerLinkSuccess = createAction(
  '[Banner Page] Update Banner Link Success',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);
export const UpdateBannerLinkFail = createAction(
  '[Banner Page] Update Banner Link Fail',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);


export const UpdateBannerDescription = createAction(
  '[Banner Page] Update Banner Description',
  props<{
    updateBanerDescription: UpdateBannerDescriptionDTO;
  }>()
);
export const UpdateBannerDescriptionSuccess = createAction(
  '[Banner Page] Update Banner Description Success',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);
export const UpdateBannerDescriptionFail = createAction(
  '[Banner Page] Update Banner Description Fail',
  props<{
    response: ResponseData<BannerDTO>;
  }>()
);

export const Reset = createAction('[Banner Page] Reset');
