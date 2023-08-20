import {ActionReducerMap} from "@ngrx/store";
import { HomeState, homeReducer } from "./banner.reducer";

export interface HomeManagementState {
    homes: HomeState;
}
export const reducers: ActionReducerMap<HomeManagementState> = {
    homes: homeReducer
};
