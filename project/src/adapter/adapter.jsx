export const getAdaptedOffer = (offer) => {
  const adapterOffer = {
    ...offer,
    host: {
      ...offer.host,
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
  };

  delete adapterOffer.host.avatar_url;
  delete adapterOffer.host.is_pro;
  delete adapterOffer.is_favorite;
  delete adapterOffer.is_premium;
  delete adapterOffer.max_adults;
  delete adapterOffer.preview_image;

  return adapterOffer;
};
