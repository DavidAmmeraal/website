import { configureStore } from './store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';


configureStore().then((store) => {
  const el = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

  ReactDOM.render(el, document.getElementById('root'));
});
