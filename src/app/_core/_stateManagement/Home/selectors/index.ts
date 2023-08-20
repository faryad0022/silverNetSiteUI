import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState } from "../reducers/banner.reducer";
import { HomeManagementState } from "../reducers";



export const getHomeManagementState = createFeatureSelector<HomeManagementState>('homeManagementSection');


// ------------------------------Select---------------------------------------
const selectHomeResponseData = (state: HomeState) => (state.response);
const selectHomes = (state: HomeState) => (state.response.data);
export const selectLoad = (state: HomeState) => (state.loadStatus);



// ------------------------------Get---------------------------------------

export const getHomeState = createSelector(getHomeManagementState, (state: HomeManagementState) => state.homes);
export const getHomeStateData = createSelector(getHomeManagementState, (state: HomeManagementState) => state.homes.response.data);
export const getLoadStatus = createSelector(getHomeState, selectLoad);
export const getHomeResponseData = createSelector(getHomeState, selectHomeResponseData);
export const getHomeList = createSelector(getHomeState, selectHomes);



