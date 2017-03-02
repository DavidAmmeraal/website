import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './HomeHeaderText.css';

class HomeHeaderText extends React.Component {
  render () {
    return (
      <span styleName='HomeHeaderText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue ante sit amet urna posuere, eget faucibus nunc mattis.</span>
    )
  }
}

export default CSSModules(HomeHeaderText, styles);
