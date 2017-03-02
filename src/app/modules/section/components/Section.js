import React, { PropTypes } from 'react';
import Measure from 'react-measure';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import { sectionSizeChanged } from '../actions';
var Waypoint = require('react-waypoint');
import styles from './Section.css';

class Section extends React.Component {

  constructor(){
    super();

    this.windowResized = this.windowResized.bind(this);
    this.state = {
      dimensions: {
        top: 0,
        left: 0,
        width: 0,
        height: 0
      }
    }
  }

  windowResized(){
    const rect = this.refs.section.getBoundingClientRect();
    const dimensions = {
      top: this.refs.section.offsetTop,
      left: this.refs.section.offsetLeft,
      width: rect.width,
      height: rect.height
    }
    this.props.sectionSizeChanged(dimensions);
  }

  componentDidMount(){
    window.addEventListener('resize', this.windowResized);
    this.windowResized();
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.windowResized);
  }

  render () {
    const self = this;
    return (
        <div ref="section">
          <Waypoint
            onEnter={this.props.onEnter}
            onLeave={this.props.onLeave}
          >
            <div className={styles.Section}>
              {this.props.children}
            </div>
          </Waypoint>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  sectionSizeChanged: (dimensions) => {
    const payload = {
      id: props.id,
      dimensions: dimensions
    }

    dispatch(sectionSizeChanged(payload));
  }
});

export default CSSModules(connect(null, mapDispatchToProps)(Section), styles);
