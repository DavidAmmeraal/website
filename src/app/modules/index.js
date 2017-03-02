import navigation from './navigation';
import section from './section';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import rootReducer from './rootReducer';
import watchers from './watchers';

export default{
  modules: {
    section,
    navigation
  },
  watchers,
  actions,
  actionTypes,
  reducer: rootReducer
}
