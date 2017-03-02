import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const populateSections = createAction(actionTypes.POPULATE_SECTIONS.ACTION);
export const focusSection = createAction(actionTypes.FOCUS_SECTION.ACTION);
export const sectionSizeChanged = createAction(actionTypes.SECTION_SIZE_CHANGED.ACTION);
export const sectionsReady = createAction(actionTypes.SECTIONS_READY.ACTION);
export const setMoving = createAction(actionTypes.SET_MOVING.ACTION);
export const enterSection = createAction(actionTypes.ENTER_SECTION.ACTION);
export const encounterSection = createAction(actionTypes.ENCOUNTER_SECTION.ACTION);
export const passSection = createAction(actionTypes.PASS_SECTION.ACTION);