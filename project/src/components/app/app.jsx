import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

function App({cards}) {
  return <Main cards={cards} />;
}

App.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      isBookmark: PropTypes.bool.isRequired,
      isPremium: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default App;
