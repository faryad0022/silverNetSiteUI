import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';
import { ResponseData } from 'src/app/_core/data/responseData';
import { StatusStage } from '../../statusStage';
import { HomeDTO } from 'src/app/_core/data/homeData/homeDTO';

export interface HomeState {
    loadStatus: StatusStage,
    response: ResponseData<HomeDTO>,
}
export const initialHomeState: HomeState = {
    loadStatus: StatusStage.NOT_LOAD,
    response: {
        errors: null,
        status: '',
        data: null
    },
};
export const Reducer = createReducer(
    initialHomeState,
    on(fromActions.GetAllHome, state => ({
        ...state,
    })),
    on(fromActions.GetAllHomeSuccess, (state, { response }) => ({
        ...state,
        loadStatus: StatusStage.LOADED,
        response: response
    })),
    on(fromActions.GetAllHomeFail, (state, { response }) => ({
        ...state,
        loadStatus: StatusStage.NOT_LOAD,
        response: {
            status: state.response.status,
            data: state.response.data,
            errors: response.errors
        }
    })),


    on(fromActions.Reset, state => ({
        ...state,
        response: {
            status: '',
            data: null,
            errors: null
        }
    })),





);
export function homeReducer(state: HomeState | undefined, action: Action) {
    return Reducer(state, action);
}
