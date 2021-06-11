import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import AuthScreen from '../login-screen/auth-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screed/not-found-screen';
import roomProp from '../room-screen/room-screen';

function App(props) {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main offers={offers} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen offers={offers} />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <RoomScreen offers={offers} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([roomProp]).isRequired,
  ),
};

export default App;
