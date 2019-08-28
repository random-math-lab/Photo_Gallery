import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';
const data = require('../../database/seeder.js')

ReactDOM.render(<App data={data}/>, document.getElementById('app'));