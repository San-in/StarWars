import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface maleCountState {
  maleCount: number;
}
const initialState: maleCountState = {
  maleCount: 0,
};

export const maleSlice = createSlice({
  name: 'male',
  initialState,
  reducers: {
    increaseMaleCount: state => {
      state.maleCount += 1;
    },
    decreaseMaleCount: state => {
      state.maleCount = state.maleCount ? state.maleCount - 1 : state.maleCount;
    },
    resetMaleCount: state => {
      state.maleCount = 0;
    },
  },
});

export const {increaseMaleCount, decreaseMaleCount, resetMaleCount} =
  maleSlice.actions;
export const selectMaleCounter = (state: RootState) => state.male.maleCount;
export default maleSlice.reducer;
