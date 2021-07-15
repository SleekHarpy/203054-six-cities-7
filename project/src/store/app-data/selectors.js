import { NameSpace } from '../root-reducer';

const getOffers = (state) => state[NameSpace.DATA].offers;
const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
const getCity = (state) => state[NameSpace.DATA].city;

export {
  getOffers,
  getLoadedDataStatus,
  getCity
};
