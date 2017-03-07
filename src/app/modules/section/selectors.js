import {createSelector} from 'reselect';
import difference from 'lodash/difference';

const sectionIdsSelector = (state) => state.section.sections;
const sectionEntitiesSelector = (state) => state.entities.sections;
const sectionSizesEntitiesSelector = (state) => state.entities.sectionSizes;
const focusSectionSelector = (state) => state.section.focus;
const positionSelector = (state) => state.section.position;
const movingSelector = (state) => state.section.moving;
const visibleSectionsSelector = (state) => state.section.visible;
const readySectionsSelector = (state) => state.section.ready;

export const getAllSectionsSelector = createSelector(
  sectionIdsSelector,
  (ids) => ids
);

export const getSectionEntitiesSelector = createSelector(
  getAllSectionsSelector,
  sectionEntitiesSelector,
  (ids, entities) => {
    return ids.map(id => entities.byId[id]);
  }
);

export const getFocusSectionSelector = createSelector(
  focusSectionSelector,
  (focussed) => focussed
);

export const getFocusSectionSizeEntitySelector = createSelector(
  getFocusSectionSelector,
  sectionSizesEntitiesSelector,
  (focussed, entities) => entities.byId[focussed]
)

export const getScrollingSectionSelector = createSelector(
  positionSelector,
  sectionSizesEntitiesSelector,
  getFocusSectionSelector,
  (position, sectionSizes, focusSection) => {
    return sectionSizes.ids.find( (id) => {
      const entity = sectionSizes.byId[id];
      return position.bottom > entity.top && id !== focusSection;
    });
  }
);

export const getCurrentlyVisibleSectionsSelector = createSelector(
  visibleSectionsSelector,
  (visible) => visible
);

export const getMovingSelector = createSelector(
  movingSelector,
  (moving) => moving
);

export const getSectionsReadySelector = createSelector(
  readySectionsSelector,
  getAllSectionsSelector,
  (ready, allSections) => {
    return !difference(allSections, ready).length;
  }
)
