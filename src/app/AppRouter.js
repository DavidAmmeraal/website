import { Router, Route, browserHistory } from 'react-router';

import React, { PropTypes } from 'react';
import App from './App';
import {connect} from 'react-redux';
import rootModule from './modules';
import {getAllSections} from 'sections';

class AppRouter extends React.Component {
  render () {

    const sections = getAllSections();

    const sectionRoutes = Object.keys(sections).map(sectionId => {
      return <Route key={sectionId} path={sections[sectionId].route} onEnter={
          (e) => {
            const activeSection = Object.keys(sections).find(section => sections[section].route === sections[sectionId].route);
            this.props.activateLink(activeSection);

            console.log('location state = ' , e.location.state);
            const forceFocus = e.location.state && e.location.state.focus;

            this.props.handleSectionRoute(sectionId, forceFocus);
            /*
            if(e.location.state && e.location.state.focus){
              return this.props.focusSection(sectionId)
            }*/
          }
        }/>
    })

    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          {sectionRoutes}
        </Route>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  activateLink: (route) => {
    dispatch(rootModule.modules.navigation.actions.activateLink(route))
  },
  handleSectionRoute: (section, forceFocus) => {
    dispatch(rootModule.modules.section.actions.handleSectionRoute(section, forceFocus));
  }
});

export default connect(null, mapDispatchToProps)(AppRouter);
