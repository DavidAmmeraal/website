import { handleActions } from 'redux-actions';
import * as actionTypes from '../actionTypes';
import union from 'lodash/union';
import without from 'lodash/without';

const initialState = {
  sections: [],
  visible: [],
  focus: null,
  moving: false
};

export default handleActions({
  [actionTypes.POPULATE_SECTIONS]: (state, action) => {
    return {
      ...state,
      sections: action.payload.result
    }
  },
  [actionTypes.FOCUS_SECTION]: (state, action) => {
    return {
      ...state,
      focus: action.payload
    }
  },
  [actionTypes.SET_MOVING.START]: (state, action) => {
    return {
      ...state,
      moving: true
    };
  },
  [actionTypes.SET_MOVING.END]: (state, action) => {
    return {
      ...state,
      moving: false
    };
  },
  [actionTypes.ENCOUNTER_SECTION.ACTION]: (state, action) => {
    return {
      ...state,
      visible: union(state.visible, [action.payload])
    }
  },
  [actionTypes.PASS_SECTION.ACTION]: (state, action) => {
    return {
      ...state,
      visible: without(state.visible, action.payload)
    }
  }
}, {...initialState})
