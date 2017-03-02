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
    this.state = {
      dimensions: {
        top: 0,
        left: 0,
        width: 0,
        height: 0
      }
    }
  }

  onMeasure(dimensions){
    const oldState = {...this.state};

    if(dimensions.height !== oldState.dimensions.height || dimensions.width !== oldState.dimensions.width){
      this.setState({
        ...this.state,
        dimensions: dimensions
      });
    }
    this.props.sectionSizeChanged(dimensions);
  }

  render () {
    const self = this;
    return (
      <Measure
        ref='scroll'
        onMeasure={this.onMeasure.bind(this)}
      >
        <Waypoint
          onEnter={this.props.onEnter}
          onLeave={this.props.onLeave}
        >
          <div className={styles.Section}>
            {this.props.children}
          </div>
        </Waypoint>
      </Measure>
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
