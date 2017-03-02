import * as actionTypes from '../actionTypes';
import merge from 'lodash/merge';

const initialState = {
  sections: {
    byId: {},
    ids: []
  },
  sectionSizes: {
    byId: {},
    ids: []
  }
};

export default {
  handlers: {
    [actionTypes.POPULATE_SECTIONS]: (state, action) => {
      return {
        ...state,
        sections: {
          byId: {...action.payload.entities.section},
          ids: [].concat(action.payload.result)
        }
      }
    },
    [actionTypes.SECTION_SIZE_CHANGED]: (state, action) => {
      console.log('action = ' , action);
      const newState = {...state};
      if(newState.sectionSizes.ids.indexOf(action.payload.id) === -1){
        newState.sectionSizes.ids = newState.sectionSizes.ids.concat(action.payload.id);
      }

      console.log('setting new dimensions = ' , action.payload.dimensions);
      const currentDimensions = newState.sectionSizes.byId[action.payload.id]
      newState.sectionSizes.byId[action.payload.id] = action.payload.dimensions;

      return newState;
    }
  },
  initialState
}
