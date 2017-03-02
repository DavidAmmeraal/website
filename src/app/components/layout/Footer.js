var React = require('react');
var PropTypes = React.PropTypes;
import CSSModules from 'react-css-modules';

import styles from './Footer.css';

class Footer extends React.Component{

  render() {
    return (
      <footer>{this.props.children}</footer>
    )
  }

};

export default CSSModules(Footer, styles);
