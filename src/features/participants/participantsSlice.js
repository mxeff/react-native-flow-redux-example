// @flow
import type { Participant } from '../../../data/participants';
import { participants } from '../../../data/participants';
import { createSlice } from '@reduxjs/toolkit';

type State = {
    items: Array<Participant>,
};

const initialState: State = {
    items: participants,
};

export const createParticipantsSlice = (name: string): any => {
    const slice = createSlice({
        name,
        initialState,
        reducers: {
            setItems: (state: State, action: any) => {
                state.items = action.payload;
            },
        },
    });

    return {
        actions: slice.actions,
        reducer: slice.reducer,
        slice,
        selectors: {
            selectItems: (state: { [key: string]: { items: Array<typeof participants> } }) => state[name].items,
        },
    };
};
