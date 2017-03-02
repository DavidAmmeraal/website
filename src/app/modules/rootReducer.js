import { combineReducers } from 'redux';
import sectionModule from './section';
import navigationModule from './navigation';
import { handleActions } from 'redux-actions';

const entitiesHandlers = Object.assign({},
  sectionModule.reducers.entities.handlers,
  navigationModule.reducers.entities.handlers
)

const entitiesIntialState = Object.assign({},
  sectionModule.reducers.entities.initialState,
  navigationModule.reducers.entities.initialState
);

export default combineReducers({
  section: sectionModule.reducers.state,
  navigation: navigationModule.reducers.state,
  entities: handleActions(
    entitiesHandlers,
    entitiesIntialState
  )
})
