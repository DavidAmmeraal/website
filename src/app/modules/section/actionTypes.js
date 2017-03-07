import { defineAction } from 'redux-define';

const pages = defineAction('section');
export const POPULATE_SECTIONS = pages.defineAction('POPULATE_SECTIONS');
export const SECTION_READY = pages.defineAction('SECTION_READY');
export const SECTION_SIZE_CHANGED = pages.defineAction('SECTION_SIZE_CHANGED');
export const WAITING_FOR_SECTIONS = pages.defineAction('WAITING_FOR_SECTIONS', ['WAIT', 'COMPLETE']);
export const FOCUS_SECTION = pages.defineAction('FOCUS_SECTION');
export const SET_MOVING = pages.defineAction('SET_MOVING', ['START', 'END']);
export const ENCOUNTER_SECTION = pages.defineAction('ENCOUNTER_SECTION');
export const PASS_SECTION = pages.defineAction('PASS_SECTION');
export const ENTER_SECTION = pages.defineAction('ENTER_SECTION');
export const LEAVE_SECTION = pages.defineAction('LEAVE_SECTION');
export const HANDLE_SECTION_ROUTE = pages.defineAction('HANDLE_SECTION_ROUTE');
