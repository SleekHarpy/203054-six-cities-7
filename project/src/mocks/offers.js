import { nanoid } from 'nanoid';
import { LENGTH_ID } from '../const';

export const offers = [
  {
    id: nanoid(LENGTH_ID),
    bedrooms: 3,
    city: {
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: nanoid(LENGTH_ID),
      isPro: true,
      name: 'Angelina',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-04.jpg'],
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    ratingPercent: 80,
    rating: 4.8,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isFavorite: true,
    isPremium: true,
  },
  {
    id: nanoid(LENGTH_ID),
    bedrooms: 3,
    city: {
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: nanoid(LENGTH_ID),
      isPro: true,
      name: 'Angelina',
    },
    location: {
      latitude: 52.45514938496378,
      longitude: 4.773877537499948,
      zoom: 8,
    },
    images: ['img/1.png', 'img/2.png'],
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 80,
    ratingPercent: 80,
    rating: 4.8,
    name: 'Wood, stone place',
    type: 'Private room',
    isFavorite: true,
    isPremium: false,
  },
  {
    id: nanoid(LENGTH_ID),
    bedrooms: 3,
    city: {
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: nanoid(LENGTH_ID),
      isPro: true,
      name: 'Angelina',
    },
    location: {
      latitude: 52.25514938496378,
      longitude: 4.573877537499948,
      zoom: 8,
    },
    images: ['img/1.png', 'img/2.png'],
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    ratingPercent: 80,
    rating: 4.8,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    isFavorite: true,
    isPremium: false,
  },
  {
    id: nanoid(LENGTH_ID),
    bedrooms: 3,
    city: {
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: nanoid(LENGTH_ID),
      isPro: true,
      name: 'Angelina',
    },
    location: {
      latitude: 52.39514938496378,
      longitude: 4.633877537499948,
      zoom: 8,
    },
    images: ['img/1.png', 'img/2.png'],
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    ratingPercent: 100,
    rating: 5,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isFavorite: false,
    isPremium: true,
  },
];