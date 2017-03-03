import {createSelector} from 'reselect';

const activeLinkSelector = state => state.navigation.active;
const linkEntitiesSelector = state => state.entities.links;
const logoVisibleSelector = state => state.navigation.logoVisible;

export const getActiveLinkSelector = createSelector(
  activeLinkSelector,
  (activeLink) => activeLink
);

export const getLinkEntitiesSelector = createSelector(
  linkEntitiesSelector,
  (linkEntities) => {
    return linkEntities.ids.map(id => ({...linkEntities.byId[id], id}));
  }
);

export const getLogoVisibleSelector = createSelector(
  logoVisibleSelector,
  (logoVisible) => {
      console.log('get logo visible!');
      return logoVisible;
  }
)
