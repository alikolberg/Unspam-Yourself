import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var element = React.createElement('h1', { className: 'greeting' }, 'Unspam Yourself!');
ReactDOM.render(element, document.getElementById('root'));

reportWebVitals();
