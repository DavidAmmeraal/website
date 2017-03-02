import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Projects.css';

class Projects extends React.Component {
  render () {

    return (
      <div styleName='Projects'>
        <p>
          This is the projects page!
        </p>
      </div>
    )
  }
}

export default CSSModules(Projects, styles);
