import React, { PropTypes } from 'react';
import styles from './SectionSeperator.css';
import CSSModules from 'react-css-modules';

class SectionSeperator extends React.Component {
  render () {
    return (
      <div styleName='SectionSeperator'>
      </div>
    )
  }
}

export default CSSModules(SectionSeperator, styles);
