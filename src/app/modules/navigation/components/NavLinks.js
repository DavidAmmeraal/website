import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './NavLinks.css';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import * as selectors from '../selectors';

class NavLinks extends React.Component {
  render () {

    const children = this.props.collapsed ? [
      (<li key={0}>
        <a href="#" styleName="hamburger" onClick={this.props.onToggleCollapse}></a>
      </li>)
    ] : this.props.links.map((linkEntity, index) => {
      return (
        <li className={linkEntity.id === this.props.active ? this.props.activeClass : null} key={index}>
          <Link to={linkEntity.route}>{linkEntity.readable}</Link>
        </li>
      )
    });


    return (
      <ul className={this.props.listClass}>
        {children}
      </ul>
    );
  }
}

const mapStateToProps = (state, props) => ({
  links: selectors.getLinkEntitiesSelector(state),
  active: selectors.getActiveLinkSelector(state)
})

export default connect(mapStateToProps)(CSSModules(NavLinks, styles));
