import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './SectionScroller.css';
import ScrollArea from 'react-scrollbar';
import Measure from 'react-measure';
import Section from './Section';
import { positionChanged } from '../actions';
import Velocity from 'velocity-animate';
import ReactDOM from 'react-dom';
import * as actionTypes from '../actionTypes';
import { connect } from 'react-redux';

import { FOCUS_ANIMATION_LENGTH } from 'constants/constants';


class SectionScroller extends React.Component {

  constructor(){
    super();
    this.state = {
      stickyDimensions: {
        height: 0,
        width: 0
      }
    }
  }

  componentDidUpdate(prevProps){
    const self = this;
    if((!prevProps.scrollTop && this.props.scrollTop) || (prevProps.scrollTop !== this.props.scrollTop)){
      this.props.startMoving();
      const scrollTop = this.props.scrollTop;

      const currentScrollTop = document.body.scrollTop;

      Velocity(document.body, {
        tween: [scrollTop, currentScrollTop]
      }, {
        duration: 200,
        progress: function(elements, complete, remaining, start, tweenValue){
          document.body.scrollTop = tweenValue;
        //
        },
        complete: function(){
          self.props.endMoving();
        }
      })
    }

  }

  onMeasureSticky(dimensions){
    this.setState({
      stickyDimensions: dimensions
    });
  }

  render () {
    const self = this;

    return (
        <div styleName='SectionScroller'>
          <Measure
            onMeasure={this.onMeasureSticky.bind(this)}
          >
            <div ref='sticky' styleName='sticky'>
              {this.props.sticky}
            </div>
          </Measure>
          <div ref='content' styleName='content'>
            {this.props.children}
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startMoving: () => {
    dispatch({
      type: actionTypes.SET_MOVING.START
    });
  },
  endMoving: () => {
    dispatch({
      type: actionTypes.SET_MOVING.END
    })
  }
});

export default connect(null, mapDispatchToProps)(CSSModules(SectionScroller, styles));
