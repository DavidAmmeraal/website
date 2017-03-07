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
  //Add the section route to the browser address
  const sectionRoute = getSectionRoute(action.payload);
  browserHistory.push(sectionRoute);

};

export function* whenActivateLink(action){
  yield put(navigationModule.actions.toggleLogo(action.payload !== 'home'));
}

export function* whenFocusSection(action){
  yield put(navigationModule.actions.activateLink(action.payload));
}
