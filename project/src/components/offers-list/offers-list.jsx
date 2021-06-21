import React from 'react';
import PropTypes from 'prop-types';
import roomProp from '../room-screen/room.prop';
import Card from '../card/card';

function OffersList({offers, onListItemHover}) {
  const listItemHoverHandler = (id) => {
    onListItemHover(id);
  };

  return (
    <div className="near-places__list places__list">
      { offers.map((offer) => (
        <li key={offer.id} onMouseEnter={() => listItemHoverHandler(offer)}>
          <Card offer={offer} />
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
