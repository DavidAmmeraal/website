import sectionModule from './section';
import navigationModule from './navigation';
import {takeEvery, call} from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as sagas from './sagas';

export default function* watch(){
  console.log(sectionModule.actionTypes);
  yield [
    call(sectionModule.watchers),
    call(navigationModule.watchers),
    takeEvery(actionTypes.POPULATE.ACTION, sagas.whenPopulate),
    takeEvery(sectionModule.actionTypes.ENTER_SECTION.ACTION, sagas.whenEnterSection)
  ]
}
