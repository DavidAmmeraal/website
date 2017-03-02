import {put, call, select} from 'redux-saga/effects';

import sectionModule from './section';
import navigationModule from './navigation';
import { browserHistory } from 'react-router';
import {getSectionRoute} from 'sections';

export function* whenPopulate(action){
  yield put(sectionModule.actions.populateSections(action.payload));
  yield put(navigationModule.actions.populateLinks(action.payload));
};

export function* whenEnterSection(action){
  console.log('action = ' , action);
  const state = yield select();
  const visibleSection = sectionModule.selectors.getCurrentlyVisibleSection(state);
  const sectionRoute = getSectionRoute(visibleSection);
  browserHistory.push(sectionRoute);
};

export function* whenFocusSection(action){
  yield put(navigationModule.actions.activateLink(action.payload));
}
