import React from 'react';
import Landing from './components/Landing';
import { render } from 'react-dom';
import './../sass/home.scss';

render(
  <Landing />,
  document.querySelector('.app')
);
