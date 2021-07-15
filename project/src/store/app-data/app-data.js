import { changeCity, loadOffers } from '../action';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  city: 'Paris',
  offers: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export { appData };
