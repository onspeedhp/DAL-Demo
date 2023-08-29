/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IOrgInfo } from './interface';

const initialState: {
  orgs: IOrgInfo[];
  lastFetch: number;
} = {
  orgs: [],
  lastFetch: -1,
};

const orgInfoSlice = createSlice({
  name: 'orginfo',
  initialState,
  reducers: {
    setLastFetch: (state, action) => {
      state.lastFetch = new Date().getTime();
    },
    changeOrgInfo: (state, action) => {
      const index = state.orgs.findIndex(
        (org: IOrgInfo) => org.id === action.payload.id
      );
      if (index === -1) {
        state.orgs.push({ ...structuredClone(action.payload) });
      } else {
        state.orgs[index] = { ...state.orgs[index], ...action.payload };
      }
    },
    setOrgsInfo: (state, action) => {
      state.orgs = [...action.payload];
    },
  },
});

export const { setLastFetch, changeOrgInfo, setOrgsInfo } =
  orgInfoSlice.actions;
export default orgInfoSlice.reducer;
