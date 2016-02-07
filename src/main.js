require('./css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/Container.jsx';
import data from './utils/data.js';

ReactDOM.render(<Container data={data}></Container>, document.getElementById('app'));
