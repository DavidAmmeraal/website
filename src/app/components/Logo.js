import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';
import {VelocityTransitionGroup, velocityHelpers} from 'velocity-react';

import styles from './Logo.css';
import {VelocityComponent} from 'velocity-react';

const defaultState = {
  open: false
}

const animations = {
  enter: velocityHelpers.registerEffect({
    defaultDuration: 1000,
    calls: [
      [{opacity: 0.9, translateY: ['0px', 'spring']}, 1],
    ]
  })
}

class Logo extends React.Component {

  constructor(){
    super();
    this.state = {...defaultState};
  }

  componentDidMount(){
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({
        open: nextProps.open
      });
    }
  }

  render () {

    const foregroundAnimation = {
      opacity: this.state.open ? 1 : 0,
      translateY: this.state.open ? '-5%' : '0%',
      scale: this.state.open ? 1.02 : 1,
    }

    const backgroundAnimation = {
      opacity: this.state.open ? 0.2 : 0
    }

    return (
      <div styleName="Logo">
        <div styleName="components">
          <VelocityComponent
            animation={foregroundAnimation}
            duration={1000}
            runOnMount
          >
            <div styleName="foreground" />
          </VelocityComponent>
          <VelocityComponent
            animation={backgroundAnimation}
            duration={500}
            runOnMount
          >
            <div styleName="background" />
          </VelocityComponent>
        </div>
       </div>
    )
  }
}

export default CSSModules(Logo, styles);
