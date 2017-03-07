import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import NavLinks from './NavLinks';
import Logo from 'components/Logo';
import { connect } from 'react-redux';
import * as selectors from '../selectors';

import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';

import styles from './Nav.css';

class Nav extends React.Component {
  render () {
    return (
      <div styleName='Nav'>
        <div styleName='logo'>
          <Logo open={this.props.logoVisible} />
        </div>
        <NavLinks
          activeClass={styles.active}
          collapsed={this.props.collapsed}
          onToggleCollapse={this.props.onToggleCollapse}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  logoVisible: selectors.getLogoVisibleSelector(state)
});

export default connect(mapStateToProps)(CSSModules(Nav, styles));
