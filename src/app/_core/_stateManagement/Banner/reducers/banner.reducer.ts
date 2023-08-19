import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';
import * as _ from 'lodash';
import { ResponseData } from 'src/app/_core/data/responseData';
import { BannerDTO } from 'src/app/_core/data/banner/bannerDTO';
import { StatusStage } from '../../statusStage';

export interface BannerState {
    loadStatus: StatusStage,
    response: ResponseData<BannerDTO[]>,
}
export const initialBannerState: BannerState = {
    loadStatus: StatusStage.NOT_LOAD,
    response: {
        errors: [],
        status: '',
        data: []
    },
};
export const Reducer = createReducer(
    initialBannerState,
    on(fromActions.GetAllBanner, state => ({
        ...state,
    })),
    on(fromActions.GetAllBannerSuccess, (state, { response }) => ({
        ...state,
        loadStatus: StatusStage.LOADED,
        response: response
    })),
    on(fromActions.GetAllBannerFail, (state, { response }) => ({
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
            errors: []
        }
    })),



    on(fromActions.AddNewBanner, (state, { Banner }) => { return { ...state }; }),
    on(fromActions.AddNewBannerSuccess, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: _.concat(state.response.data, response.data),
                errors: response.errors
            }
        }
    }),
    on(fromActions.AddNewBannerFail, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: state.response.data,
                errors: response.errors
            }
        };
    }),



    on(fromActions.UpdateBanner, (state, { Banner }) => {
        return {
            ...state,
        };
    }),
    on(fromActions.UpdateBannerSuccess, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: state.response.data.map(data => {
                    if (data.id === response.data.id) {
                        data = response.data
                    }
                    return data
                }),
                errors: response.errors
            },
        }
    }),
    on(fromActions.UpdateBannerFail, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: state.response.data,
                errors: response.errors
            }
        }

    }),



    on(fromActions.DeleteBanner, (state, { id }) => {
        return {
            ...state,
        };
    }),
    on(fromActions.DeleteBannerSuccess, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: state.response.data.filter(data => data.id !== response.data.id),
                errors: response.errors
            },
        }
    }),
    on(fromActions.DeleteBannerFail, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: state.response.data,
                errors: response.errors
            }
        }

    }),


    on(fromActions.ChangeBannerStatus, (state, { id }) => {
        return {
            ...state,
        };
    }),
    on(fromActions.ChangeBannerStatusSuccess, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: state.response.data.map(data => {
                    if (data.id === response.data.id) {
                        data = response.data
                    }
                    return data
                }),
                errors: response.errors
            },
        }
    }),
    on(fromActions.ChangeBannerStatusFail, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: state.response.data,
                errors: response.errors
            }
        }

    }),


    on(fromActions.UpdateBannerLink, (state, { updateBanerLink }) => {
        return {
            ...state,
        };
    }),
    on(fromActions.UpdateBannerLinkSuccess, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: state.response.data.map(data => {
                    if (data.id === response.data.id) {
                        data = response.data
                    }
                    return data
                }),
                errors: response.errors
            },
        }
    }),
    on(fromActions.UpdateBannerLinkFail, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: state.response.data,
                errors: response.errors
            }
        }

    }),


    on(fromActions.UpdateBannerDescription, (state, { updateBanerDescription }) => {
        return {
            ...state,
        };
    }),
    on(fromActions.UpdateBannerDescriptionSuccess, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: state.response.data.map(data => {
                    if (data.id === response.data.id) {
                        data = response.data
                    }
                    return data
                }),
                errors: response.errors
            },
        }
    }),
    on(fromActions.UpdateBannerDescriptionFail, (state, { response }) => {
        return {
            ...state,
            response: {
                status: response.status,
                data: state.response.data,
                errors: response.errors
            }
        }

    }),

);
export function bannerReducer(state: BannerState | undefined, action: Action) {
    return Reducer(state, action);
}
