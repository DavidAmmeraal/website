import React, { PropTypes } from 'react';
import {VelocityTransitionGroup, VelocityComponent, velocityHelpers} from 'velocity-react';
import Measure from 'react-measure';

import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import styles from './Cards.css';

import CSSModules from 'react-css-modules';

const ENTER_DURATION = 1200;
const HOVER_DURATION = 500;
const FOLDING_DURATION = 750;

const animations = {
  enter: velocityHelpers.registerEffect({
    defaultDuration: ENTER_DURATION,
    calls: [
      [{opacity: 0.9, translateY: ['0px', 'spring']}, 1],
    ]
  })
}

class CardsWrapper extends React.Component{
  render(){
    return (
      <Row  middle="xs" styleName="CardsWrapper">
        <Col xsOffset={1} xs={10}>
          <Row>
            {this.props.children}
          </Row>
        </Col>
      </Row>
    )
  }
};

class AnimatedCard extends React.Component{

  render(){
    const animation = this.props.active ? {
      scale: [this.props.hovering ? 1.2 : 1, 'spring']
    } : null;

    return (
      <VelocityComponent
        animation={animation}
      >
        {this.props.children}
      </VelocityComponent>
    )
  }

}

const wrapper = CSSModules(CardsWrapper, styles);

class Cards extends React.Component {

  constructor(props){
    super(props);

    this._enterComplete = this._enterComplete.bind(this);

    this.state = {
      open: false,
      hoverIndex: null
    };
  }

  componentDidMount(){
    this._handleProps(this.props);

    const self = this;

  }

  _makeCardHandler(index, handler){
    return (e) => handler.apply(this, [index]);
  }


  _onCardHover(index){
    if(index !== this.state.hoverIndex && this.state.open)
      this.setState({...this.state, hoverIndex: index})
  }

  _onCardLeave(index){
    this.setState({
      ...this.state, hoverIndex: null
    });
  }

  _onCardOpen(index){
    console.log('card open = ' , index);
  }

  _enterComplete(){
    this.setState({
      open: true
    })
  }

  _handleProps(nextProps){
    const children = React.Children.map(nextProps.children, (child, index) => {

      const hoverHandler = this._makeCardHandler(index, this._onCardHover);
      const openHandler = this._makeCardHandler(index, this._onCardOpen);
      const leaveHandler = this._makeCardHandler(index, this._onCardLeave);

      return (
        <Col xs={4} key={index}
          onMouseOver={hoverHandler}
          onMouseLeave={leaveHandler}
          onTouchStart={hoverHandler}
          onClick={openHandler}
        >
            {child}
        </Col>
      )
    })

    this.setState({
      ...this.state,
      children: children
    });
  }

  componentWillReceiveProps(nextProps){
    this._handleProps(nextProps);
  }

  render () {
    const children = React.Children.map(this.state.children, (child, index) => {
      const left = 100 - (index * 100);

      return (
          <VelocityComponent
            animation={{translateX: [this.state.open ? '0%' : left + '%', 'spring']}}
            duration={FOLDING_DURATION}
          >
            <AnimatedCard
              active={this.state.open}
              hovering={index === this.state.hoverIndex}
            >
              {child}
            </AnimatedCard>
          </VelocityComponent>
      )
    })

    return (
      <Measure>
        { dimensions => {
          return (
          <VelocityTransitionGroup component={wrapper}
            enter={{
              animation: animations.enter,
              complete: this._enterComplete,
              style: {
                opacity: 0,
                translateY: dimensions.height + 'px'
              }
            }}
          >
            {children}
          </VelocityTransitionGroup>
          )
        }}
      </Measure>
    );

  }
}

export default CSSModules(Cards, styles);
