import { createAction, props } from '@ngrx/store';

export const editDecodedToken = createAction(
    '[DecodedToken] Edit',
    props<{token: string}>()
);

export const resetDecodedToken = createAction(
    '[DecodedToken] Reset'
);

