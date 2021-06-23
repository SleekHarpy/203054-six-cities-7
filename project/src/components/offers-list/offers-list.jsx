import React from 'react';
import PropTypes from 'prop-types';
import roomProp from '../room-screen/room.prop';
import Card from '../card/card';

function OffersList({offers, onListItemHover}) {


  return (
    <div className="near-places__list places__list">
      { offers.map((offer) => (
        <li key={offer.id} >
          <Card offer={offer} onListItemHover={onListItemHover} />
        </li>
      )) }
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([roomProp]).isRequired,
  ),
  onListItemHover: PropTypes.func,
};

export default OffersList;
