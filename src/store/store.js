import { configureStore } from '@reduxjs/toolkit';
import { createParticipantsSlice } from '../features/participants/participantsSlice';

export const tipSlice = createParticipantsSlice('tip');
export const tasteSlice = createParticipantsSlice('taste');
export const resultSlice = createParticipantsSlice('result');

export const store = configureStore({
    reducer: {
        tip: tipSlice.reducer,
        taste: tasteSlice.reducer,
        result: resultSlice.reducer,
    },
});
