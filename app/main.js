import React from 'react';
import Landing from 'components/Landing/Landing';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'state/store';
import 'sass/landing.scss';
import 'sass/modal.scss';
const location = window.location.origin;

render(
  <Provider store={ store }>
    <Landing api='http://localhost:8000' location={ location } />
  </Provider>,
  document.querySelector('.app')
);
