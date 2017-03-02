import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Skills.css';

class Skills extends React.Component {
  render () {

    return (
      <div styleName='Skills'>
        <p>
          This is the skills page
        </p>
      </div>
    )
  }
}

export default CSSModules(Skills, styles);
