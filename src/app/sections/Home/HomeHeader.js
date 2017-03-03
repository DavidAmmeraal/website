import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';

import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';

import HomeHeaderTitle from './HomeHeaderTitle';
import Logo from 'components/Logo';
import HomeHeaderText from './HomeHeaderText';
import styles from './HomeHeader.css';

class HomeHeader extends React.Component {
  render () {

    return (
      <div styleName='HomeHeader'>
        <Grid styleName='layout'>
          <Row styleName='contents'>
            <Col xs={12} styleName='logoContainer'>
              <div styleName='logo'>
                <Logo open={true} />
              </div>
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
