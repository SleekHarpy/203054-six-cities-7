import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import { Provider } from 'react-redux';
import { createAPI } from './services/api';
import { AuthorizationStatus } from './const';
import { checkAuth, fetchHotelsList } from './store/api-actions';
import { requireAuthorization } from './store/action';
import { configureStore } from '@reduxjs/toolkit';
import { redirect } from './store/middlewares/redirect';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchHotelsList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
