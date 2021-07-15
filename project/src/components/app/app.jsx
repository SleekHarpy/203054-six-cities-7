import React from 'react';
import MainScreen from '../../pages/main-screen/main-screen';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import AuthScreen from '../../pages/login-screen/auth-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { connect } from 'react-redux';
import { isCheckedAuth } from '../../utils/common';
import PrivateRoute from '../private-route/private-route';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getLoadedDataStatus } from '../../store/app-data/selectors';

function App({authorizationStatus, isDataLoaded}) {

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }

  const returnFavoritesScreen = () => <FavoritesScreen />;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          authorizationStatus={authorizationStatus}
          render={returnFavoritesScreen}
        />
        <Route exact path={AppRoute.OFFER}>
          <RoomScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isDataLoaded: getLoadedDataStatus(state),
});

export { App };
export default connect(mapStateToProps, null)(App);
