import React, { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import PropTypes from 'prop-types';
import roomProp from '../room-screen/room.prop';
import { CITY } from '../../const';

function Map({offers, selectedOffer}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === selectedOffer.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, defaultCustomIcon, currentCustomIcon, offers, selectedOffer]);

  return (
    <div
      id='map'
      style={{height: '100%'}}
      ref={mapRef}
    >

    </div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([roomProp]).isRequired,
  ),
  selectedOffer: PropTypes.oneOfType([roomProp]).isRequired,
};

export default Map;
