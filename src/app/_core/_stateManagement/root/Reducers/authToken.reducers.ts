import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/index';
import { DecodedTokenState } from '../decodedToken.state';



const initialState: DecodedTokenState = {
    decodedToken: ''
};

export const authTokenReducers = createReducer(
    initialState,
    on(
        actions.editDecodedToken,
        (state, { token }) => ({ ...state, decodedToken: token }),
    ),
    on(
        actions.resetDecodedToken,
        state => ({ ...state }),
    ),
);

export function AuthReducer(state: DecodedTokenState | undefined, action: Action) {
    return authTokenReducers(state, action);
}