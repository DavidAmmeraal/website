import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootModule from 'modules';
import { routerMiddleware } from 'react-router-redux';

import { getNormalizedSections, getNormalizedSectionRoutes } from 'sections';

export default (preloadedState) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootModule.reducer,
        preloadedState,
        composeWithDevTools(
          applyMiddleware(
              sagaMiddleware
          )
        )
    );
    sagaMiddleware.run(rootModule.watchers);

    store.dispatch(rootModule.actions.populate(getNormalizedSections()));
    return Promise.resolve(store);
}
