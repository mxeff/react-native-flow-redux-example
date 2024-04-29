// @flow
import type { Participant } from '../../../data/participants';
import { participants } from '../../../data/participants';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: participants,
};

export const createParticipantsSlice = (name: string): any => {
    const slice = createSlice({
        name,
        initialState,
        reducers: {
            setItems: (state, action) => {
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
