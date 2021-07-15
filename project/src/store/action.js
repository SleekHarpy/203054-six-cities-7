import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  CHANGE_CITY: 'main-screen/changeCity',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'app/redirectToRoute',
};

const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

const logout = createAction(ActionType.LOGOUT);

export {
  ActionType,
  changeCity,
  loadOffers,
  requireAuthorization,
  logout
};
