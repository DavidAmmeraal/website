import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as sagas from './sagas';

import * as actionTypes from './actionTypes';
import * as actions from './actions';

export default function* watch(){
  return yield[
    takeEvery(actionTypes.ENCOUNTER_SECTION.ACTION, sagas.whenEncounterSection),
    takeEvery(actionTypes.PASS_SECTION.ACTION, sagas.whenPassSection),
    //takeEvery(actionTypes.FOCUS_SECTION.ACTION, sagas.whenFocusSection),
    takeEvery(actionTypes.HANDLE_SECTION_ROUTE.ACTION, sagas.handleSectionRoute)
  ]
}
