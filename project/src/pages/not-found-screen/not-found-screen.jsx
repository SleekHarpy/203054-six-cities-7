import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import React from 'react';

function NotFoundScreen() {
  return (
    <>
      <p style={{textAlign: 'center', fontSize: '32px'}}>404 Page not found</p>
      <Link style={{display: 'block', color: 'blue', textDecoration: 'underline', textAlign: 'center'}} to={AppRoute.ROOT}>Go to main page</Link>
    </>
  );
}

export default NotFoundScreen;
