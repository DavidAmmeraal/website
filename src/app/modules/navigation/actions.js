import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const populateLinks = createAction(actionTypes.POPULATE_LINKS.ACTION);
export const activateLink = createAction(actionTypes.ACTIVATE_LINK.ACTION);
export const toggleLogo = createAction(actionTypes.TOGGLE_LOGO.ACTION);
