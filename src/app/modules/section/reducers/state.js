import { handleActions } from 'redux-actions';
import * as actionTypes from '../actionTypes';

const initialState = {
  sections: [],
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
  }
}, {...initialState})
