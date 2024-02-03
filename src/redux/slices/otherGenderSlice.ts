import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface otherGenderCountState {
  otherGenderCount: number;
}
const initialState: otherGenderCountState = {
  otherGenderCount: 0,
};

export const otherGenderSlice = createSlice({
  name: 'otherGender',
  initialState,
  reducers: {
    increaseOtherGenderCount: state => {
      state.otherGenderCount += 1;
    },
    decreaseOtherGenderCount: state => {
      state.otherGenderCount = state.otherGenderCount
        ? state.otherGenderCount - 1
        : state.otherGenderCount;
    },
    resetOtherGenderCount: state => {
      state.otherGenderCount = 0;
    },
  },
});

export const {
  increaseOtherGenderCount,
  decreaseOtherGenderCount,
  resetOtherGenderCount,
} = otherGenderSlice.actions;
export const selectOtherGenderCounter = (state: RootState) =>
  state.otherGender.otherGenderCount;
export default otherGenderSlice.reducer;
