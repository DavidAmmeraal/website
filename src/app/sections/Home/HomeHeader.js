import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';

import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';

import HomeHeaderTitle from './HomeHeaderTitle';
import HomeHeaderLogo from './HomeHeaderLogo';
import HomeHeaderText from './HomeHeaderText';
import styles from './HomeHeader.css';

class HomeHeader extends React.Component {
  render () {

    return (
      <div styleName='HomeHeader'>
        <Grid styleName='HomeHeaderLayout'>
          <Row styleName='contents'>
            <Col xs={12} styleName='LogoWrapper'>
              <HomeHeaderLogo open={true}/>
            </Col>
            <Col xs={12}>
              <HomeHeaderText />
            </Col>
          </Row>
          <Row styleName='footer'>
            <Col xs={12}>
              <a styleName="down"></a>
            </Col>
          </Row>
        </Grid>
      </div>
    )

    /*
    return (
      <div styleName='HomeHeader'>
        <Grid styleName='HomeHeaderContents'>
          <Row>
            <Col xsOffset={5} xs={7}>
              <HomeHeaderTitle />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <HomeHeaderLogo open={true}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <HomeHeaderText />
            </Col>
          </Row>
        </Grid>
      </div>
    )*/
  }
}

export default CSSModules(HomeHeader, styles);
