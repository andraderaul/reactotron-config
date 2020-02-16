import { all, takeLatest } from 'redux-saga/effects'

import { Types as FAvoriteTypes } from '../ducks/favorites';
import { addFavorite } from './favorites';

export default function* rootSaga() {
  yield all([
    takeLatest(FAvoriteTypes.ADD_REQUEST, addFavorite),
  ]);
}