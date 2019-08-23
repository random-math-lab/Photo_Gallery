import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
import RandomDataGenerator from './components/RandomDataGenerator.jsx';

ReactDOM.render(<App data={RandomDataGenerator}/>, document.getElementById('app'));