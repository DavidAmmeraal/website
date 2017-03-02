import CSSModules from 'react-css-modules';
import React from 'react';

import styles from './Layout.css';

import { Grid, Row } from 'react-flexbox-grid/lib/index';

class Layout extends React.Component {
  render(){

    const styleName = this.props.fillHeight ? 'VerticalStretchLayout' : 'Layout'

    return (
      <div styleName={styleName}>
        <Grid >
          {this.props.children}
        </Grid>
      </div>
    )
  }
}

export default CSSModules(Layout, styles);
