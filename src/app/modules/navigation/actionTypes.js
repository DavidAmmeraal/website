import { defineAction } from 'redux-define';

const pages = defineAction('navigation');
export const POPULATE_LINKS = pages.defineAction('POPULATE_LINKS');
