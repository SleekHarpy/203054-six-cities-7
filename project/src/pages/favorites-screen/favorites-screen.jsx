import React from 'react';
import Card from '../../components/card/card';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { getFavoriteCities } from '../../utils/common';
import { useSelector } from 'react-redux';
import { getOffers } from '../../store/app-data/selectors';

function FavoritesScreen() {
  const offers = useSelector(getOffers);
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

export default FavoritesScreen;
