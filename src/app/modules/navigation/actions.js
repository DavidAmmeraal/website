import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const populateLinks = createAction(actionTypes.POPULATE_LINKS.ACTION);
