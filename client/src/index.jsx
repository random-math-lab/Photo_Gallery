import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
const RandomDataGenerator = require('../../database/RandomDataGenerator.js')

ReactDOM.render(<App data={RandomDataGenerator.RandomDataGenerator}/>, document.getElementById('app'));