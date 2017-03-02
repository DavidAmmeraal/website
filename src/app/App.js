import "normalize.css/normalize.css";
import "font-awesome-webpack";
import CSSModules from 'react-css-modules';
import 'theme/Typography.css';

import rootModule from './modules';
import {connect} from 'react-redux';

import styles from './App.css';

class App extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div id="app" styleName="App">
        <rootModule.modules.navigation.components.NavigationContext>
          <rootModule.modules.navigation.components.Nav />

          <rootModule.modules.section.containers.SectionsContainer />
        </rootModule.modules.navigation.components.NavigationContext>
      </div>
    )

  }
}

export default CSSModules(App, styles);