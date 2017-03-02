import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const populate = createAction(actionTypes.POPULATE.ACTION);
