import {ActionReducerMap} from "@ngrx/store";
import { BannerState, bannerReducer } from "./banner.reducer";

export interface BannerManagementState {
    banners: BannerState;
}
export const reducers: ActionReducerMap<BannerManagementState> = {
    banners: bannerReducer
};
