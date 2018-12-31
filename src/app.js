import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import Time from './components/Time';

const App = (
  <div>
    <Time/>
  </div>
);
ReactDOM.render(App,document.querySelector("#app"));
