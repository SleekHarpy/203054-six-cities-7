import React, { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import PropTypes from 'prop-types';
import roomProp from '../../pages/room-screen/room.prop';

function Map({offers, selectedOffer}) {
  const [offer] = offers;
  const location = [offer.city.location.latitude, offer.city.location.longitude];
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const markers = leaflet.layerGroup();

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
      markers.clearLayers();
      offers.forEach((offerItem) => {
        const marker = leaflet
          .marker({
            lat: offerItem.location.latitude,
            lng: offerItem.location.longitude,
          }, {
            icon: (offerItem.id === selectedOffer.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          });
        markers.addLayer(marker);
      });
      markers.addTo(map);
    }

    return () => {
      markers.clearLayers();
    };

  }, [map, currentCustomIcon, defaultCustomIcon, offers, selectedOffer, markers]);

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
