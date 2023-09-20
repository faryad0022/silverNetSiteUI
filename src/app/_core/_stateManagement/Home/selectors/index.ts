import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState } from "../reducers/home.reducer";
import { HomeManagementState } from "../reducers";



export const getHomeManagementState = createFeatureSelector<HomeManagementState>('homeManagementSection');


// ------------------------------Select---------------------------------------
const selectHomeResponseData = (state: HomeState) => (state.response);
const selectHomes = (state: HomeState) => (state.response.data);
const selectBanners = (state: HomeState) => (state.response.data.bannerDTOs);
const selectLatestBlog = (state: HomeState) => (state.response.data.latestBlogContent);
const selectLatestProperty = (state: HomeState) => (state.response.data.latestProperty);
const selectSocials = (state: HomeState) => (state.response.data.social);

const selectLoad = (state: HomeState) => (state.loadStatus);



// ------------------------------Get---------------------------------------

export const getHomeState = createSelector(getHomeManagementState, (state: HomeManagementState) => state.homes);
export const getHomeStateData = createSelector(getHomeManagementState, (state: HomeManagementState) => state.homes.response.data);
export const getLoadStatus = createSelector(getHomeState, selectLoad);
export const getHomeResponseData = createSelector(getHomeState, selectHomeResponseData);
export const getHomeList = createSelector(getHomeState, selectHomes);
export const getBanners = createSelector(getHomeState, selectBanners);
export const getLatestBlogs = createSelector(getHomeState, selectLatestBlog);
export const getLatestProperty = createSelector(getHomeState, selectLatestProperty);
export const getSocialList = createSelector(getHomeState, selectSocials);


