import { handleActions } from 'redux-actions';
import * as actionTypes from '../actionTypes';

const initialState = {
  collapsed: false,
  active: null,
  links: []
};

export default handleActions({
  [actionTypes.POPULATE_LINKS]: (state, action) => {
    return {
      ...state,
      links: action.payload.result
    }
  },
  [actionTypes.ACTIVATE_LINK]: (state, action) => {
    return {
      ...state,
      active: action.payload
    }
  }
}, {...initialState})
