import React from 'react';
import App from './AppContainer';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'state/store';
import 'sass/landing.scss';
import 'sass/modal.scss';

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('.app')
);
