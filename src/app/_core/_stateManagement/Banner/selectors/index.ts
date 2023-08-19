import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BannerManagementState } from '../reducers';
import { BannerState } from '../reducers/banner.reducer';
import { BannerDTO } from 'src/app/_core/data/banner/bannerDTO';


export const getBannerManagementState = createFeatureSelector<BannerManagementState>('bannerManagementSection');


// ------------------------------Select---------------------------------------
const selectBannerResponseData = (state: BannerState) => (state.response);
const selectBanners = (state: BannerState) => (state.response.data);
export const selectLoad = (state:BannerState) => (state.loadStatus);



// ------------------------------Get---------------------------------------

export const getBannerState = createSelector(getBannerManagementState, (state: BannerManagementState) => state.banners);
export const getBannerStateData = createSelector(getBannerManagementState, (state: BannerManagementState) => state.banners.response.data);
export const getLoadStatus = createSelector(getBannerState, selectLoad);
export const getBannerResponseData = createSelector(getBannerState, selectBannerResponseData);
export const getBannerList = createSelector(getBannerState, selectBanners);
export const getBannerImages = createSelector(getBannerStateData, (selectBanners) => {
    let images: string[] = [];
    selectBanners.forEach(val => {
        images.push(val.bannerImage)
    });
    return images;
});


