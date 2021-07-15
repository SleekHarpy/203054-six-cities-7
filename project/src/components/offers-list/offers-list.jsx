import React from 'react';
import PropTypes from 'prop-types';
import roomProp from '../../pages/room-screen/room.prop';
import Card from '../card/card';

function OffersList({offers, onListItemHover}) {


  return (
    <div className="near-places__list places__list">
      { offers.map((offer) => (
        <Card offer={offer} key={offer.id} onListItemHover={onListItemHover} />
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
