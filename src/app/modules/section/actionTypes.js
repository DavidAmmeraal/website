import { defineAction } from 'redux-define';

const pages = defineAction('section');
export const POPULATE_SECTIONS = pages.defineAction('POPULATE_SECTIONS');
export const SECTION_SIZE_CHANGED = pages.defineAction('SECTION_SIZE_CHANGED');
export const SECTIONS_READY = pages.defineAction('SECTIONS_READY');
export const FOCUS_SECTION = pages.defineAction('FOCUS_SECTION');
export const SET_MOVING = pages.defineAction('SET_MOVING', ['START', 'END']);
export const ENCOUNTER_SECTION = pages.defineAction('ENCOUNTER_SECTION');
export const PASS_SECTION = pages.defineAction('PASS_SECTION');
export const ENTER_SECTION = pages.defineAction('ENTER_SECTION');
export const LEAVE_SECTION = pages.defineAction('LEAVE_SECTION');
