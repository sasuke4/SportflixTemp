import React from 'react';
import Landing from './components/Landing';
import { render } from 'react-dom';
import './../sass/landing.scss';

render(
  <Landing location='http://localhost:8000'/>,
  document.querySelector('.app')
);
