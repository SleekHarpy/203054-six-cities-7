import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const cards = [
  {
    img: 'img/apartment-01.jpg',
    price: 120,
    rating: 80,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isBookmark: false,
    isPremium: true,
  },
  {
    img: 'img/room.jpg',
    price: 80,
    rating: 80,
    name: 'Wood, stone place',
    type: 'Private room',
    isBookmark: true,
    isPremium: false,
  },
  {
    img: 'img/apartment-02.jpg',
    price: 132,
    rating: 80,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    isBookmark: false,
    isPremium: false,
  },
  {
    img: 'img/apartment-03.jpg',
    price: 180,
    rating: 100,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isBookmark: false,
    isPremium: true,
  },
  {
    img: 'img/room.jpg',
    price: 80,
    rating: 100,
    name: 'Wood and stone place',
    type: 'Private room',
    isBookmark: true,
    isPremium: false,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App cards={cards} />
  </React.StrictMode>,
  document.getElementById('root'));
