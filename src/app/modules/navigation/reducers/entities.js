import * as actionTypes from '../actionTypes';

const initialState = {
  links: {
    byId: {},
    ids: []
  }
};

export default {
  handlers: {
    [actionTypes.POPULATE_LINKS]: (state, action) => {
      console.log('action = ' , action);
      return {
        ...state,
        links: {
          byId: {...action.payload.entities.links},
          ids: [].concat(action.payload.result)
        }
      }
    },
  },
  initialState
}
