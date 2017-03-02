import home from './Home';
import skills from './Skills';
import projects from './Projects';

const sections = {
  home: {
    active: true,
    route: 'home',
    readable: 'Home',
    element: home
  },
  skills: {
    route: 'background',
    readable: 'Background',
    element: skills
  },
  projects: {
    route: 'projects',
    readable: 'Projects',
    element: projects
  }
}

export const getAllSections = () => {
  return sections;
}

export const getNormalizedSections = () => {
  return {
    result: Object.keys(sections),
    entities: {
      sections: Object.keys(sections).reduce((result, next) => {
        return {
          ...result,
          [next]: {...sections[next], element: undefined, route: undefined, readable: undefined}
        }
      }, {}),
      links: Object.keys(sections).reduce((result, next) => {
        return {
          ...result,
          [next]: {...sections[next], element: undefined, active: undefined}
        }
      }, {})
    }
  }
}

export const getSectionElement = (sectionId) => {
  return sections[sectionId].element;
}

export const getSectionRoute = (sectionId) => {
  return sections[sectionId].route;
}
