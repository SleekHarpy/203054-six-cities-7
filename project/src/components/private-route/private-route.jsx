import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PropTypes from 'prop-types';

function PrivateRoute({render, path, exact, authorizationStatus}) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routerProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routerProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
