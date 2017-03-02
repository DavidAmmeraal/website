import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './Card.css';

class Card extends React.Component {
  render(){
    const styleName = 'Card-' + (this.props.index % 3 + 1);
    return (
      <div className='card' styleName={styleName} >
        <div styleName='contents'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default CSSModules(Card, styles);
