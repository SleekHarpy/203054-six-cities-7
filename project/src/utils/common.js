export const getFavoriteCities = (offers) => {
  const filteredCities = offers
    .filter((item) => item.isFavorite )
    .map((item) => item.city.name);

  return filteredCities
    .filter((item, index) => index === filteredCities
      .indexOf(item = item.trim()));
};

export const getSortedOffersList = (offers, city) => offers.filter((offer) => offer.city.name === city);
