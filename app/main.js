import React from 'react';
import Landing from './components/Landing/Landing';
import { render } from 'react-dom';
import { Provider } from 'redux';
import store from './store';
import './../sass/landing.scss';
import './../sass/modal.scss';
const location = window.location.origin;

render(
  <Provider>
    <Landing api='http://localhost:8000' location={ location } />
  </Provider>,
  document.querySelector('.app')
);
