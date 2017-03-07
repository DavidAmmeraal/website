import {put, call, select, take} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import { browserHistory } from 'react-router';
import * as selectors from './selectors';

export const whenEncounterSection = function* (action){
  const state = yield select();
  const moving = selectors.getMovingSelector(state);

  if(!moving){
    yield put(actions.enterSection(action.payload));
  }
}

export const handleSectionRoute = function* (action){

  const state = yield select();
  let ready = yield call(selectors.getSectionsReadySelector, state);

  const forceFocus = action.payload.forceFocus || !ready;

  if(!ready){
    yield put({
      type: actionTypes.SET_MOVING.START
    })
  }

  while(!ready){
    const action = yield take(actionTypes.SECTION_READY.ACTION);
    const state = yield select();
    ready = yield call(selectors.getSectionsReadySelector, state);
  }

  if(forceFocus){
    yield put(actions.focusSection(action.payload.sectionId));
  }

}

/**
 * Required to make sure the first section gets selected when leaving the
 * second.
 */
export const whenPassSection = function* (action){
  const state = yield select();
  const moving = selectors.getMovingSelector(state);
  const ids = selectors.getAllSectionsSelector(state);

  if(!moving){
    const visible = selectors.getCurrentlyVisibleSectionsSelector(state);
    if(ids.indexOf(visible) === 0){
      yield put(actions.enterSection());
    }
  }
}
