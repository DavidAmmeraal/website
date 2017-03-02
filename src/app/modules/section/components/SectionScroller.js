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

let contentTop = 0;

class SectionScroller extends React.Component {

  componentDidMount(){
    const scrollingContent = this.refs.scrollingContent;
    const boundingRect = scrollingContent.getBoundingClientRect();

    contentTop = boundingRect.top;
  }

  componentDidUpdate(){

    const scrollingArea = this.refs.scrollingArea;
    const scrollTop = this.props.scrollPosition.top - contentTop;
    const self = this;

    this.props.startMoving();
    Velocity(this.refs.scrollingArea, {
      tween: [scrollTop, scrollingArea.scrollTop]
    }, {
      duration: 200,
      progress: function(elements, complete, remaining, start, tweenValue){
        scrollingArea.scrollTop = tweenValue;
      },
      complete: function(){
        self.props.endMoving();
      }
    })
  }


  render () {
    const self = this;

    return (
        <div styleName='ScrollingWrapper'>
            <div styleName='ScrollingArea' ref='scrollingArea'>
              <div ref='scrollingArea' ref='scrollingContent'>
                {this.props.children}
              </div>
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
