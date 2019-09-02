import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App.jsx';
const db = require('../../database/seeder.js')


ReactDOM.render(<App data={db.seeder(100)}/>, document.getElementById('app'));