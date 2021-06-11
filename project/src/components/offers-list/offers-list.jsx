import React from 'react';
import PropTypes from 'prop-types';
import roomProp from '../room-screen/room.prop';
import Card from '../card/card';

function OffersList(props) {
  const {offers} = props;

  return (
    <div className="near-places__list places__list">
      { offers.map((offer) => (
        <Card offer={offer} key={offer.id} />
      )) }
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([roomProp]).isRequired,
  ),
};

export default OffersList;
