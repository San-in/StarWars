import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface femaleCountState {
  femaleCount: number;
}
const initialState: femaleCountState = {
  femaleCount: 0,
};

export const femaleSlice = createSlice({
  name: 'female',
  initialState,
  reducers: {
    increaseFemaleCount: state => {
      state.femaleCount += 1;
    },
    decreaseFemaleCount: state => {
      state.femaleCount = state.femaleCount
        ? state.femaleCount - 1
        : state.femaleCount;
    },
    resetFemaleCount: state => {
      state.femaleCount = 0;
    },
  },
});

export const {increaseFemaleCount, decreaseFemaleCount, resetFemaleCount} =
  femaleSlice.actions;
export const selectFemaleCounter = (state: RootState) =>
  state.female.femaleCount;
export default femaleSlice.reducer;
