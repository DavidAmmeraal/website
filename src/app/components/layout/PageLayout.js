var React = require('react');
var PropTypes = React.PropTypes;
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';
import Flexbox from 'flexbox-react';
import CSSModules from 'react-css-modules';
import styles from './PageLayout.css';

class PageLayout extends React.Component{

  render(){
    return (
      <Flexbox flexDirection="column" minHeight="100vh">
        {this.props.header &&
          <Grid>
            <Row>
              <Col xs={12}>
                <Flexbox element="header">
                  {this.props.header}
                </Flexbox>
              </Col>
            </Row>
          </Grid>
        }

        <Flexbox flexGrow={1}>
          {this.props.children}
        </Flexbox>

        {this.props.footer &&
          <Flexbox element="footer" styleName='footer'>
            {this.props.footer}
          </Flexbox>
        }
      </Flexbox>
    );
  }

};

export default CSSModules(PageLayout, styles);
