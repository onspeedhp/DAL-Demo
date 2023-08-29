import { configureStore } from '@reduxjs/toolkit';
import orginfoReducer from '../reducers/orginfo.reducer';

export const store = configureStore({
  reducer: {
    orginfo: orginfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// action types
export const CLEAR_DATA = 'CLEAR_DATA';

// action creator
export const clearData = () => ({
  type: CLEAR_DATA,
});
