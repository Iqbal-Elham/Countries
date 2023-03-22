import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './covidSlice/covidSlice';

const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

export default store;
