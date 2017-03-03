import {put, call, select, take} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import { browserHistory } from 'react-router';
import {
  getScrollingSectionSelector,
  getFocusSectionSizeEntitySelector,
  getMovingSelector,
  sectionSizesEntitiesSelector
} from './selectors';

export const whenEncounterSection = function* (action){
  const state = yield select();
  const moving = getMovingSelector(state);

  if(!moving){
    yield put(actions.enterSection(action.payload));
  }

}

export const whenSectionSizeChanged = function* (action){
  const state = yield select();
  //const sectionSizeEntities = sectionSizesEntitiesSelector(state);
}
