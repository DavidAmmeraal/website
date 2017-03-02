import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import NavLinks from './NavLinks';

import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';

import styles from './Nav.css';

class Nav extends React.Component {
  render () {
    return (
      <div styleName='Nav'>
        <Grid styleName='NavItemsContainer'>
          <Row styleName='NavItems'>
            <NavLinks
              activeClass={styles.active}
              collapsed={this.props.collapsed}
              onToggleCollapse={this.props.onToggleCollapse}
            />
          </Row>
        </Grid>
      </div>
    )
  }
}

export default CSSModules(Nav, styles);
