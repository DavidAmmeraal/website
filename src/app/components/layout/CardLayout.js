import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './CardLayout.css';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';

class CardLayout extends React.Component {
  render(){


    const children = this.props.children.map(child => {
      return (
        <Col xs={4}>{child}</Col>
      )
    });

    return (
      <Grid>
        <Row>
          {children}
        </Row>
      </Grid>
    );

  }

}

export default CSSModules(CardLayout, styles);
