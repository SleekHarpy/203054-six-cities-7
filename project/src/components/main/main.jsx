import React from 'react';
import PropTypes from 'prop-types';
import roomProp from '../room-screen/room.prop';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import { ActionCreator } from '../../store/action';
import { getSortedOffersList } from '../../utils/common';
import { connect } from 'react-redux';
import Cities from '../cities/cities';
import CitiesEmpty from '../cities-empty/cities-empty';

function Main(props) {
  const {offers, city, onCityChange} = props;

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"/>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"/>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"/>
          </symbol>
        </svg>
      </div>

      <div className="page page--gray page--main">

        <Header />

        <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
          <h1 className="visually-hidden">Cities</h1>
          <Tabs onCityChange={onCityChange} cityTab={city} />
          { offers.length > 0 ?
            <Cities offers={offers} city={city} /> :
            <CitiesEmpty city={city} /> }
        </main>
      </div>
    </>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([roomProp]).isRequired,
  ),
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: getSortedOffersList(state.offers, state.city),
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(evt) {
    dispatch(ActionCreator.changeCity(evt.target.textContent));
  },
});

export { Main };
export default connect(mapStateToProps, mapDispatchToProps)(Main);
