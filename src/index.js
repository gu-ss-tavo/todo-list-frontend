import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './normalize.css';
import './index.css';

import App from './App';
import { store } from './store/MainStore';

// render app
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);