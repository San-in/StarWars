import {configureStore} from '@reduxjs/toolkit';
import maleReducer from './slices/maleSlice.ts';
import femaleReducer from './slices/femaleSlice.ts';
import otherGenderReducer from './slices/otherGenderSlice.ts';
export const store = configureStore({
  reducer: {
    male: maleReducer,
    female: femaleReducer,
    otherGender: otherGenderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
