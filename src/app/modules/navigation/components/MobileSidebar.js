import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './MobileSidebar.css';
import NavLinks from './NavLinks';
var Sidebar = require('react-sidebar').default;


class MobileSidebar extends React.Component {

  render () {

    const sidebarProps = {
      ...this.props,
      sidebarClassName: styles.sidebar,
      contentClassName: styles.content,
      sidebar: (
        <NavLinks
          listClass={styles.navList}
          activeClass={styles.activeNavItem}
        />
      )
    };

    const sidebar = (
      <Sidebar
        {...sidebarProps}
      >
        {this.props.children}
      </Sidebar>
    );

    return sidebar;
  }
}

export default CSSModules(MobileSidebar, styles);
