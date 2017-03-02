import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as sagas from './sagas';

import * as actionTypes from './actionTypes';
import * as actions from './actions';

console.log('watchers!');

console.log('action types = ' , actionTypes);

export default function* watch(){
  return yield[
    takeEvery(actionTypes.ENCOUNTER_SECTION.ACTION, sagas.whenEncounterSection),
    takeEvery(actionTypes.SECTION_SIZE_CHANGED.ACTION, sagas.whenSectionSizeChanged)
  ]
}
