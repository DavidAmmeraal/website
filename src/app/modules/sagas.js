import {put, call} from 'redux-saga/effects';

import sectionModule from './section';
import navigationModule from './navigation';
import { browserHistory } from 'react-router';
import {getSectionRoute} from 'sections';

export function* whenPopulate(action){
  yield put(sectionModule.actions.populateSections(action.payload));
  yield put(navigationModule.actions.populateLinks(action.payload));
};

export function* whenEnterSection(action){
  const sectionRoute = getSectionRoute(action.payload);
  browserHistory.push(sectionRoute);
}
