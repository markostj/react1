// Default imports
import React from 'react';
import ReactDOM from 'react-dom';

// Named import
import { App } from './App';

// Entry file for our app
// Takes the base App component and renders it inside a div called root (in index.html file)
ReactDOM.render(<App />, document.getElementById('root'));
