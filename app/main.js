import React from 'react';
import Landing from './components/Landing/Landing';
import { render } from 'react-dom';
import './../sass/landing.scss';
import './../sass/modal.scss';
const location = window.location.origin;

render(
  <Landing api='http://localhost:8000' location={ location } />,
  document.querySelector('.app')
);
