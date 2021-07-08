import React from 'react';
import PropTypes from 'prop-types';
import roomProp from '../room-screen/room.prop';
import Card from '../card/card';
import Header from '../header/header';
import Footer from '../footer/footer';
import { getFavoriteCities } from '../../utils/common';
import { connect } from 'react-redux';

function FavoritesScreen({offers}) {
  const cities = getFavoriteCities(offers);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              { cities.map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="/">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    { offers.map((offer) => (
                      offer.city.name === city && offer.isFavorite ? <Card offer={offer} key={offer.id} /> : ''
                    )) }
                  </div>
                </li>
              )) }
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([roomProp]).isRequired,
  ),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export { FavoritesScreen };
export default connect(mapStateToProps, null)(FavoritesScreen);
