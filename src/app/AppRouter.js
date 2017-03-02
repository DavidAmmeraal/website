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
      console.log(sections[sectionId].route);
      return <Route key={sectionId} path={sections[sectionId].route} onEnter={() => this.props.focusSection(sectionId)} />
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
  focusSection: (section) => {
    dispatch(rootModule.modules.section.actions.focusSection(section));
  }
});

export default connect(null, mapDispatchToProps)(AppRouter);
