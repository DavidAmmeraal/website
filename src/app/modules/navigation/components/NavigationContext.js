import React, { PropTypes } from 'react'

import CSSModules from 'react-css-modules';
import MobileSidebar from './MobileSidebar';
import Nav from './Nav';
import NavLinks from './NavLinks';
import MediaQuery from 'react-responsive';
import styles from './NavigationContext.css';

class NavigationContext extends React.Component {

  constructor(){
    super();

    this.state = {
      collapsed: true
    }
  }

  _onToggleCollapse(){
    console.log('onToggleCollapse!');
    this.setState({
      ...this.state,
      collapsed: !this.state.collapsed
    });
  }

  _onContentClick(){
    if(!this.state.collapsed){
      this.setState({
        collapsed: true
      });
    }
  }

  render () {
    return (
      <MediaQuery maxWidth={768}>
        {(matches) => {
          return (
            <MobileSidebar
              docked={matches && !this.state.collapsed}
              onSetOpen={this.onSetSidebarOpen}
            >
              <div className={styles.content} onClick={this._onContentClick.bind(this)}>
                {this.props.children}
              </div>
            </MobileSidebar>
          )
        }}
      </MediaQuery>
    )
  }
}

export default CSSModules(NavigationContext, styles);
